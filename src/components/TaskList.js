import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newTask } from '../actions/taskActions'

import Task from './Task';

class TaskList extends Component {
	constructor(props) {
		super(props);
		this.newSampleTask = this.newSampleTask.bind(this);
	}

	newSampleTask() {
		this.props.newTask('sample task name');
	}

	render() {
		return (
			<div className="container" id="content">
				<button onClick={this.newSampleTask}>Create New Task</button>
				{this.props.tasks.map(task =>
					task.completed ? undefined : <Task name={task.name} check={this.props.toggleTask} uuid={task.key} key={task.key} />
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	tasks: state.taskList.tasks,
});

const mapDispatchToProps = dispatch => ({
	newTask: id => {
		dispatch(newTask(id))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);