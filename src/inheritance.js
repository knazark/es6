class Task {
	constructor(title) {
		this._title = title;
		this._done = false;

		console.log('run Taskconstructor');
	}

	get title() {
		return this._title;
	}

	set title(value) {
		this._title = value;
	}

	complete() {
		this._done = true;
	}
}

class SubTask extends Task {
	constructor(title, parent) {
		super(title);
		this.parent = parent;
		console.log('run SubTaskconstructor');
	}

	complete() {
		super.complete();
		this.done = true;

		console.log('SubTask finish ' + this.title);
	}
}

let task = new Task('task');
let subtask = new SubTask('subtask', task);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);

// console.log(subtask instanceof SubTask);
// console.log(subtask instanceof Task);