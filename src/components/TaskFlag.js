import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskFlag extends Component {
	constructor(props) {
		super(props);
	
	}

	render() {
		return (
			<div className="task_flag">
				<i className="icon"></i>
			</div>
		);
	}
}

export default TaskFlag;