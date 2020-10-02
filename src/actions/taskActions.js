import { GET_TASKS, NEW_TASK } from './types';

export const getTasks = () => dispatch => {
	console.log('getting');
	dispatch({
		type: GET_TASKS,
		payload: []
	})
}