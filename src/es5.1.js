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


var obj = {
	name: 'nazar',
	sayName: function () {
		console.log(this.name);
	}
}

var f = obj.sayName.bind(obj);
f();

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
// function f(a, b) {
// 	alert( a - b );
// }
//
// f.defer(1000)(1, 2);


function pow(x,n){
	if(n != 1) {
		return x * pow(x, n-1);
	} else {
		return x;
	}
}

pow(2,3);

function factorial(n){
	console.log(n);
	return n ? n * factorial(n-1) : 1;
}

console.log(factorial(5));

var numbers = "[0, 1, 2, 3]";

var numbers_json = JSON.parse(numbers);

console.log(numbers);
console.log(numbers_json);

var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);
console.log(user);

// [1,2,3,4].forEach(function(i){
// 	console.log(i);
// });
//
// function asyncFunc(array) {
// 	array.forEach(function(i){
// 		(function(x) {
// 			setTimeout(function() {
// 				console.log(x);
// 			}, 0);
// 		})(i);
// 	});
// }
//
// asyncFunc([1,2,3,4]);


// for (var i = 1; i <= 10; i++) {
// 	(function (i) {
// 		setTimeout(function () { console.log(i); }, 0);
// 	})(i);
// }



var test1 = {
	name : 'Hello'
}

var a = test1;
console.log(a.name);

var b = JSON.parse(JSON.stringify(a));
b.name = 'pasha';

console.log(a.name);

// for(var i=0;i<10000;i++) document.write('<span></span>');
// var elements=document.body.getElementsByTagName('span'); var len=elements.length;
// var d=new Date;
// for(var i=0;i<len;i++) elements[i];
// alert("Последовательно:"+(new Date-d)+"мс");//(1) vard=newDate;
// for(var i=0;i<len;i+=2) elements[i],elements[len-i-1];
// alert("Вразнобой:"+(new Date-d)+"мс");

// var elems=document.documentElement.childNodes;
// console.log(elems);
// [].forEach.call(elems, function(elem){
// 	console.log(elem);
// });