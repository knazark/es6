'use strict';

var firstName = 'Nazar',
    lastName = 'Kovtun',
    email = 'knazark@gmail.com';

var person = {
	constructor: function constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	},

	firstName: firstName,
	lastName: lastName,
	email: email,
	sayHello: function sayHello() {
		console.log(this.firstName + ' ' + this.lastName);
	},

	get fullName() {
		return this.firstName + ' ' + this.lastName;
	},
	set fullName(value) {
		this.firstName = value;
	}
};

// Object.defineProperty(person, 'fullName', {
// 	get: function () {
// 		return this.firstName + ' ' + this.lastName;
// 	},
//
// 	set: function (value) {
// 		this.firstName = value;
// 	}
// });

console.log(person);
console.log(person.fullName);

// person.sayHello();
//
// function createCar(property, value) {
// 	return {
// 		[property]: value,
// 		['_' + property]: value,
// 		['get' + property]() {
// 			return this[property];
// 		}
// 	}
// }
//
// let obj = createCar('vin', 1);
// console.log(obj.getvin());