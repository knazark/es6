let browsers = ['Chrome', 'Mozilla', 'Edge', 'Safari'];

for (let index in browsers) {
	console.log(index);
}

for (let browser of browsers) {
	console.log(browser);
}

browsers.forEach(function (key, value) {
	console.log(value);
	console.log(key);
})