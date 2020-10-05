import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togTask } from '../actions/taskActions';

import PropTypes from 'prop-types';
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
			<div className="task">
				<div className="row">
					<button className="checkbtn" onClick={this.toggleTaskHandler}><i className="icon-cross"></i></button>
					<p className="task_name">{this.props.name}</p>
				</div>
				<div className="row">
					<TaskDateFlag />
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

const mapDispatchToProps = dispatch => ({
	toggleChecked: key => {
		dispatch(togTask(key))
	}
});

export default connect(undefined, mapDispatchToProps)(Task);