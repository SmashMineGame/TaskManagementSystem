import { v4 as uuid } from 'uuid';
import { DEL_TASK, NEW_TASK } from '../actions/types';

const initState = {
	tasks: [],
}

export default function (state = initState, action) {
	switch (action.type) {
		case NEW_TASK:
			var newState = {...state};
			newState.tasks.push(newTask(action.taskName));
			return newState;
		default:
			return state;
	}
}

function newTask (taskName) {

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