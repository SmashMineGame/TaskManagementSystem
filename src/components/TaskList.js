import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newTask } from '../actions/taskActions'

import Task from './Task';

class TaskList extends Component {
	constructor(props) {
		super(props);
		this.newSampleTask = this.newSampleTask.bind(this);
		this.printState = this.printState.bind(this);
	}

	newSampleTask() {
		this.props.newTask('sample task name');
	}

	printState() {
		console.log(this.props);
	}

	render() {
		return (
			<div className="container" id="content">
				<button onClick={this.printState}>Print State</button>
				{this.props.tasks.map(task =>
					<Task
						name={task.name}
						checked={task.completed}
						uuid={task.key}
						key={task.key}
						dueDate={task.dueDate}
					/>
				)}
				<button onClick={this.newSampleTask} className="newTaskBtn">+</button>
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
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);