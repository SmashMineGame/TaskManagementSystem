import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { togTask } from '../actions/taskActions';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TaskDateFlag from './TaskDateFlag';

class Task extends Component {
	constructor(props) {
		super(props);

		this.toggleTaskHandler = this.toggleTaskHandler.bind(this);
	}


	toggleTaskHandler() {
		this.props.toggleChecked(this.props.uuid);
	}

	render() {
		return (
			<div className={`task ${this.props.checked ? "completed" : ""}`} >
				<div className="row">
					<button className="checkbtn" onClick={this.toggleTaskHandler}>
						<FontAwesomeIcon icon={faCheck} className="icon-check" />
					</button>
					<p className="task_name">{this.props.name}</p>
				</div>
				<div className="row">
					<TaskDateFlag />
				</div>
			</div >
		);
	}
}

Task.propTypes = {
	checked: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	dueDate: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
	toggleChecked: key => {
		dispatch(togTask(key))
	}
});

export default connect(undefined, mapDispatchToProps)(Task);