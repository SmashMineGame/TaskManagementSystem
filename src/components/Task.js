import React, { Component } from 'react';

class Task extends Component {
	render() {
		return (
			<div className="task">
  				<button className="checkbtn"></button>
  				<h3 className="task_name">{this.props.name}</h3>
			</div>
		);
	}
}

export default Task;