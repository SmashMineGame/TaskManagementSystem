import { TOG_TASK, NEW_TASK } from './types';
import { v4 as uuid } from 'uuid';

export const newTask = (taskName, dueDate = new Date(), hasTime = false) => {
	return {
		type: NEW_TASK,
		taskName: taskName,
		dueDate: dueDate,
		hasTime: hasTime,
		id: uuid()
	}
}

export const togTask = (key) => {
	return {
		type: TOG_TASK,
		key: key
	}
}