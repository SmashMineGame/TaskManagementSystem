import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasks } from '../actions/taskActions';

import Task from './Task';
import Form from './Form';

class TaskList extends Component {
	render() {
		return (
			<div className="container" id="content">
				<Form newTask={this.props.newTask}/>
				{this.props.tasks.map(task => 
					task.completed ? undefined : <Task name={task.name} check={this.props.toggleTask} uuid= {task.key} key={task.key} />
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	tasks: state.tasks,
})

export default connect(mapStateToProps)(TaskList);