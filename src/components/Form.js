import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.newTaskHandler = this.newTaskHandler.bind(this);
	}
	

	newTaskHandler() {
		this.props.newTask('Sample Task Name');
	}

	render() {
		return (
			<button onClick={this.newTaskHandler}>Create New Task</button>
		);
	}
}

export default Form;