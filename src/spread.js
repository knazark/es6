/**
 * Created by knazark on 7/27/16.
 */
let staticLang = ['C', 'C++'];
let dynamicLang = ['JavaScript', 'PHP'];

let languages = [...staticLang, 'C#', ...dynamicLang, 'Python'];

console.log(languages);

function add(x, y, z) {
	console.log(parseInt(x) + parseInt(y) + parseInt(z));
}

let number = ['1', '2', '3'];

add(...number);