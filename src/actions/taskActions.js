import { TOG_TASK, NEW_TASK } from './types';
import { v4 as uuid } from 'uuid';

export const newTask = (taskName) => {
	return {
		type: NEW_TASK,
		taskName: taskName,
		id: uuid()
	}
}

export const togTask = (key) => {
	return {
		type: TOG_TASK,
		key: key
	}
}