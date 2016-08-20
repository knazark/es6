var myApp = (function () {
	function Singleton(options) {
		var options = options || {};

		this.firstName = 'Nazar';
		this.lastName = options.lastName || 'Kovtun Pro';

		this.getName = function () {
			console.log(this.firstName + ' ' + this.lastName);
		}
	}

	var module = {};
	var instance;

	module.getInstance = function (options) {
		if(instance === undefined) {
			instance = new Singleton(options);
		}

		return instance;
	};

	return module;
}());

var app = myApp.getInstance({
	lastName : 'Kovtun'
});

app.getName();

// function Machine() {
// 	var self = this;
//
// 	self._enabled = false;
//
// 	this.enable = function() {
// 		self._enabled = true;
// 	};
//
// 	this.disable = function() {
// 		self._enabled = false;
// 	};
// }
//
// function CoffeeMachine(power) {
// 	Machine.call(this);
//
// 	var parentEnable = this.enable;
// 	this.enable = function() {
// 		parentEnable();
// 		this.run();
// 	};
//
// 	this.run = function () {
// 		// alert( this._enabled ); // true
// 	}
// }
//
//
//
// var coffeeMachine = new CoffeeMachine(10000);
// console.log(coffeeMachine);
// coffeeMachine.enable();

function Machines() {
	this.firstName = 'Kovtun';
}

Machines.prototype.enable = function() {
};

Machines.prototype.disable = function() {
};

function coffeeMachines() {

}



var tmpFunc = function () {};
tmpFunc.prototype = Machines.prototype;
coffeeMachines.prototype = new tmpFunc();

coffeeMachines.prototype.enable = function () {
	Machines.prototype.enable.apply(this, arguments);
	this.run();
};

coffeeMachines.prototype.run = function () {
	// alert(this._enabled);
};

//
// coffeeMachines.prototype = new Machines();

var coffee = new coffeeMachines();
console.log(coffee);



// function showList() {
// 	alert( Array.prototype.join.call(arguments, " - ") );
// }
//
// showList("Вася", "Паша", "Маша");

String.prototype.repeat = function(times) {
	// console.dir(new Array(10)
	// 	.join().split(',')
	// 	.map(function(item, index){ return ++index;}));
	return new Array(times + 1).join(this);
};

console.log( "ля".repeat(3) );


Object.prototype.each = function(f) {
	for (var prop in this) {
		var value = this[prop];
		f.call(value, prop, value); // вызовет f(prop, value), this=value
	}
}

// Попробуем! (внимание, пока что это работает неверно!)
// var user = {
// 	name: 'Вася',
// 	age: 25
// };
//
// user.each(function(prop, val) {
// 	alert( prop ); // name -> age -> (!) each
// });


Function.prototype.defer = function(ms) {
	var f = this;
	return function() {
		var args = arguments,
			context = this;
		setTimeout(function() {
			f.apply(context, args);
		}, ms);
	}
}

// проверка
function f(a, b) {
	alert( a - b );
}

f.defer(1000)(1, 2);
