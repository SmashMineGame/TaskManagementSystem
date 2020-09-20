import React, { Component } from 'react';

class Task extends Component {
	render() {
		return (
			<div class="task">
  				<input type="checkbox" />
  				<h3 class="task_name">Sample Task Name</h3>
			</div>
		);
	}
}

export default Task;