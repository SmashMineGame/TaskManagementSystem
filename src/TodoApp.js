import React, { Component } from 'react';

import Nav from './components/Nav';
import TaskList from './components/TaskList';

class TodoApp extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			tasks: [
				{name: "sample task 1"}, {name: "sample task 2"}
			]
		}

		this.newTask = this.newTask.bind(this);
	}
	
	
	newTask(task){
		this.setState({
			tasks: [...this.state.tasks, task]
		});
		console.log(this.state.tasks);
	}

	render() {
		return (<>
			<Nav />
			<TaskList tasks={this.state.tasks} newTask={this.newTask}/>
		</>);
	}
}

export default TodoApp;