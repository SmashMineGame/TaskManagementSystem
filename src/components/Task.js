import React, { Component } from 'react';

class Task extends Component {
	render() {
		return (
			<div className="task">
  				<input type="checkbox" />
  				<h3 className="task_name">{this.props.name}</h3>
			</div>
		);
	}
}

export default Task;