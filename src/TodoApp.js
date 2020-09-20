import React, { Component } from 'react';

import Nav from './components/Nav';
import TaskList from './components/TaskList';

class TodoApp extends Component {
	render() {
		return (<>
			<Nav />
			<TaskList />
		</>);
	}
}

export default TodoApp;