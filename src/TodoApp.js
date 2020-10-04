import { v4 as uuid } from 'uuid';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Nav from './components/Nav';
import TaskList from './components/TaskList';

import { newTask } from './actions/taskActions';

store.dispatch(newTask('sample1'));
store.dispatch(newTask('sample2'));
store.dispatch(newTask('sample3'));

class TodoApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tasks: []
		}

		this.newTask = this.newTask.bind(this);
		this.toggleTask = this.toggleTask.bind(this);
	}

	componentDidMount() { this.newTask("sample task 1") }


	newTask(taskName) {

		var taskTemplate = {
			name: undefined,
			completed: false,
			key: uuid()
		}

		var newTask = JSON.parse(JSON.stringify(taskTemplate));
		newTask.name = taskName;

		var newState = JSON.parse(JSON.stringify(this.state));
		newState.tasks.push(newTask);

		this.setState(newState);
	}

	toggleTask(key) {
		var newState = JSON.parse(JSON.stringify(this.state));
		for (let i = 0; i < newState.tasks.length; i++) {
			const task = newState.tasks[i];
			if (task.key === key) {
				task.completed = !task.completed;
				break;
			}
		}
		this.setState(newState);
	}

	render() {
		return (<Provider store={store}>
			<Nav />
			<TaskList tasks={this.state.tasks} newTask={this.newTask} toggleTask={this.toggleTask} />
		</Provider>);
	}
}

export default TodoApp;