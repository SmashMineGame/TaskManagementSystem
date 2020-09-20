import React, { Component } from 'react';

import Task from './Task';
import Form from './Form'

class TaskList extends Component {
	render() {
		return (
			<div class="container" id="content">
				<Form />
				<Task />		
			</div>
		);
	}
}


export default TaskList;