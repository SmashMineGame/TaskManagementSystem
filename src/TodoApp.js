import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import Nav from './components/Nav';
import TaskList from './components/TaskList';

class TodoApp extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			tasks: []
		}

		this.newTask = this.newTask.bind(this);

	}

	componentDidMount() {
		this.newTask("sample task 1");
		this.newTask("sample task 2");
	}
	

	newTask(taskName){

		var taskTemplate = {
			name: undefined,
			checked: false,
			key: uuid()
		}

		var newTask = JSON.parse(JSON.stringify(taskTemplate));
		newTask.name = taskName;

		var newState = JSON.parse(JSON.stringify(this.state));
		newState.tasks.push(newTask);

		this.setState(newState);
		console.log(newTask);
	}

	render() {
		return (<>
			<Nav />
			<TaskList tasks={this.state.tasks} newTask={this.newTask}/>
		</>);
	}
}

export default TodoApp;