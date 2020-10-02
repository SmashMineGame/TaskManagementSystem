import { DEL_TASK, NEW_TASK } from './types';

export const newTask = (taskName) => {
	console.log('newTask Action');
	return {
		type: NEW_TASK,
		taskName: taskName 
	}
}