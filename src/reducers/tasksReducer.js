import { GET_POSTS, GET_TASKS, NEW_POST } from '../actions/types';

export default function (state = {}, action) {
	switch (action.type) {
		case GET_TASKS:
			console.log('reducer');
			return {
				...state,
				tasks: action.payload
			}
		default:
			return state;
	}
}