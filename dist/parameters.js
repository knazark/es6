'use strict';

/**
 * Created by knazark on 7/28/16.
 */
function greet() {
	var greetind = arguments.length <= 0 || arguments[0] === undefined ? 'Hello' : arguments[0];
	var name = arguments.length <= 1 || arguments[1] === undefined ? 'friend' : arguments[1];

	console.log(greetind + name);
}

greet('hi', 'Bill');
greet('hi');

function sum() {
	var sum = 0;

	Array.prototype.forEach.call(arguments, function (value) {
		sum += value;
	});

	console.log(sum);
}

function sum() {
	var sum = 0;

	for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
		values[_key] = arguments[_key];
	}

	values.forEach(function (value) {
		sum += value;
	});

	console.log(sum);
}

function sum() {
	for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		values[_key2] = arguments[_key2];
	}

	console.log(values.reduce(function (prevValue, currentValue) {
		return prevValue + currentValue;
	}));
}

sum(1, 2, 3, 4);