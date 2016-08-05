let add = (x, y) => x + y;

let square = (x) => x * x;

let give = () => 42;

let log = () => console.log('Loggin');

let multiply = (x, y) => {
	let result = x * y;
	return result;
}

// let person = () => ({name: 'Nazar'});

(() => console.log('IIE'))();

let person = {
	name: 'Bob',
	greet: () => {console.log(this);}
};

// console.log(add(2, 5));
// console.log(square(3));
// console.log(give());
// log();
// console.log(multiply(2, 5));
// console.log(person());

person.greet();