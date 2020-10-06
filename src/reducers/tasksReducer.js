import { TOG_TASK, NEW_TASK } from '../actions/types';

const initState = {
	tasks: [],
}

export default function (state = initState, action) {
	var newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case NEW_TASK:
			newState.tasks.push(newTask(action.id, action.taskName, action.dueDate, action.hasTime));
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

function newTask(id, taskName, dueDate, hasTime) {
	var task = {
		name: taskName,
		completed: false,
		dueDate: dueDate,
		hasTime: hasTime,
		key: id
	}

	return task;
}