'use strict';

/**
 * Created by knazark on 7/27/16.
 */
var staticLang = ['C', 'C++'];
var dynamicLang = ['JavaScript', 'PHP'];

var languages = [].concat(staticLang, ['C#'], dynamicLang, ['Python']);

console.log(languages);

function add(x, y, z) {
  console.log(parseInt(x) + parseInt(y) + parseInt(z));
}

var number = ['1', '2', '3'];

add.apply(undefined, number);