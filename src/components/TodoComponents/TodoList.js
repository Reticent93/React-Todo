// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// receives Todo array and iterates over

import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
	constructor(props) {
		super();
		this.state = {
			task: props.todoList
		};
		console.log('todolist', props);
	}
	render() {
		return (<div className="todoList">{this.state.task.map((item) => <Todo key={item.id} item={item} />)}</div>)
	}
}
