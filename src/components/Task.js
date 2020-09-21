import React, { Component } from 'react';

class Task extends Component {
	constructor(props) {
		super(props);
		
		this.toggleTaskHandler = this.toggleTaskHandler.bind(this);
	}
	

	toggleTaskHandler() {
		this.props.toggle(this.props.uuid);
	}

	render() {
		return (
			<div className="task">
  				<button className="checkbtn" onClick={this.toggleTaskHandler}></button>
  				<h3 className="task_name">{this.props.name}</h3>
			</div>
		);
	}
}

export default Task;