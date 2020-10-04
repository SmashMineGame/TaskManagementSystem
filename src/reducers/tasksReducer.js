import { v4 as uuid } from 'uuid';
import { TOG_TASK, NEW_TASK } from '../actions/types';

const initState = {
	tasks: [],
}

export default function (state = initState, action) {
	var newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case NEW_TASK:
			newState.tasks.push(newTask(action.taskName));
			break;
		case TOG_TASK:
			newState.tasks.map(el => {
				if (el.key === action.key) el.completed = !el.completed;
				return el;
			});
			break;
		default:
			break;
	}
	return newState;
}

function newTask(taskName) {

	var taskTemplate = {
		name: undefined,
		completed: false,
		key: uuid()
	}

	var task = {
		...taskTemplate,
		name: taskName
	};
	return task;
}