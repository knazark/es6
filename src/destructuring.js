let languages = ['JavaScript', 'PHP'];


let [js, php] = languages;

let scores = [3, 4, 5, 6];
let [low, ...rest] = scores;

console.log(low, rest);

function compile([low, mid]) {
	console.log(low, mid);
}

compile([3,4]);