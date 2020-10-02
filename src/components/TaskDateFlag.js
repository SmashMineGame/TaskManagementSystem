import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskDateFlag extends Component {
	render() {
		return (
			<div className="task_flag">
				<i className="icon-date"></i>
				<p className="content">Tommmorow</p>
			</div>
		);
	}
}

// TaskDateFlag.propTypes = {
// 	icon: PropTypes.string.isRequired,
// 	date: PropTypes.string.isRequired
// }

export default TaskDateFlag;