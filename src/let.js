var buttons = document.querySelectorAll('button');

for(let i = 0; i< buttons.length; i++) {
	var button = buttons[i];

	button.innerText = i;
	
	button.onclick = function () {
		console.log(i);
	}
}

let options = {
	title: "Меню"
};

let {width:w=100, height:h=200, title} = options;

console.log(title);