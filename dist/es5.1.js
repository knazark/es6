'use strict';

var myApp = function () {
	function Singleton(options) {
		var options = options || {};

		this.firstName = 'Nazar';
		this.lastName = options.lastName || 'Kovtun Pro';

		this.getName = function () {
			console.log(this.firstName + ' ' + this.lastName);
		};
	}

	var module = {};
	var instance;

	module.getInstance = function (options) {
		if (instance === undefined) {
			instance = new Singleton(options);
		}

		return instance;
	};

	return module;
}();

var app = myApp.getInstance({
	lastName: 'Kovtun'
});

app.getName();

function Machine() {
	var self = this;

	self._enabled = false;

	this.enable = function () {
		self._enabled = true;
	};

	this.disable = function () {
		self._enabled = false;
	};
}

function CoffeeMachine(power) {
	Machine.call(this);

	var parentEnable = this.enable;
	this.enable = function () {
		parentEnable();
		this.run();
	};

	this.run = function () {
		// alert( this._enabled ); // true
	};
}

var coffeeMachine = new CoffeeMachine(10000);
console.log(coffeeMachine);
coffeeMachine.enable();

function Machines() {
	this._enabled = false;
}

Machines.prototype._enable = function () {
	this._enabled = true;
};

Machines.prototype.disable = function () {
	this._enabled = false;
};

var ma = new Machines();

var coffeeMachines = Object.create(ma);

coffeeMachines.enable = function () {
	this._enable();
	this._run();
};

coffeeMachines._run = function () {
	alert(this._enabled);
};

console.log(coffeeMachines.enable());