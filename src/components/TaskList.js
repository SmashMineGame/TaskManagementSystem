import React, { Component } from 'react';

import Task from './Task';
import Form from './Form';

class TaskList extends Component {
	render() {
		return (
			<div className="container" id="content">
				<Form newTask={this.props.newTask}/>
				{this.props.tasks.map(task => 
					<Task name={task.name} />
				)}
			</div>
		);
	}
}


export default TaskList;