import { TOG_TASK, NEW_TASK } from './types';

export const newTask = (taskName) => {
	return {
		type: NEW_TASK,
		taskName: taskName
	}
}

export const togTask = (key) => {
	return {
		type: TOG_TASK,
		key: key
	}
}