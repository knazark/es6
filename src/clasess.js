class Task {
	constructor(title = Task.getDefaultTitle()) {
		this.title = title;
		this._done = false;

		Task.count += 1;
	}

	get done() {
		return this._done === true ? 'Good' : 'NOT';
	}

	set done(value) {
		if(value !== undefined && typeof value === 'boolean') {
			this._done = value;
		} else {
			console.error('true or false');
		}
	}

	complete() {
		this.done = true;

		console.log('Finish ' + this.title);
	}

	static getDefaultTitle() {
		return 'title3'
	}
}
Task.count = 0;



let task1 = new Task('title1');
console.log(task1.done, task1._done);
task1.complete();
console.log(task1.done, task1._done);
// let task2 = new Task('title2');
// let task3 = new Task();
//
//
// console.log(task1.title);
// console.log(task2.title);
// console.log(task3.title);
//
// console.log(Task.count);
//
// console.log(task2.complete());