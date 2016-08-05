/**
 * Created by knazark on 7/28/16.
 */
function greet(greetind = 'Hello', name = 'friend') {
	console.log(greetind + name);
}

greet('hi', 'Bill');
greet('hi');

function sum() {
	var sum = 0;

	Array.prototype.forEach.call(arguments, function (value) {
		sum += value;
	})

	console.log(sum);
}

function sum(...values) {
	let sum = 0;
	values.forEach(function (value) {
		sum += value;
	})

	console.log(sum);
}

function sum(...values) {
	console.log(values.reduce(function (prevValue, currentValue) {
		return prevValue + currentValue;
	}))
}

sum(1,2,3,4);