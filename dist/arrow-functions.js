'use strict';

var add = function add(x, y) {
	return x + y;
};

var square = function square(x) {
	return x * x;
};

var give = function give() {
	return 42;
};

var log = function log() {
	return console.log('Loggin');
};

var multiply = function multiply(x, y) {
	var result = x * y;
	return result;
};

// let person = () => ({name: 'Nazar'});

(function () {
	return console.log('IIE');
})();

var person = {
	name: 'Bob',
	greet: function greet() {
		console.log(undefined);
	}
};

// console.log(add(2, 5));
// console.log(square(3));
// console.log(give());
// log();
// console.log(multiply(2, 5));
// console.log(person());

person.greet();