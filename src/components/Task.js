import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskFlag from './TaskFlag';

class Task extends Component {
	constructor(props) {
		super(props);
		
		this.toggleTaskHandler = this.toggleTaskHandler.bind(this);
	}
	

	toggleTaskHandler() {
		this.props.check(this.props.uuid);
	}

	render() {
		return (
			<div className="task">
				<div className="row">
  					<button className="checkbtn" onClick={this.toggleTaskHandler}>X</button>
  					<p className="task_name">{this.props.name}</p>
				</div>
				<div className="row">
					<TaskFlag />
				</div>
			</div>
		);
	}
}

Task.propTypes = {
	check: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	dueDate: PropTypes.string.isRequired,
};

export default Task;