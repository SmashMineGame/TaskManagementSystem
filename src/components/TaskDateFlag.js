import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TaskDateFlag extends Component {
	render() {
		return (
			<div className="task_flag">
				<FontAwesomeIcon icon={faCalendarAlt} className="icon-date" />
				<p className="content">{`${this.props.date.getMonth() + 1}"-"${this.props.date.getDate()}-${this.props.date.getFullYear()}`}</p>
			</div>
		);
	}
}

TaskDateFlag.propTypes = {
	date: PropTypes.string.isRequired
}

export default TaskDateFlag;