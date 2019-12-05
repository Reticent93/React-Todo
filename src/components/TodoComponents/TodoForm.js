import React, { Component } from 'react';
import './Todo.css';

export class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskText: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			taskText: e.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addTask(this.state.taskText);
		this.setState({
			taskText: ''
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input input="text" name={this.state.taskText} onChange={this.handleChange} />
				<button type="submit">Add</button>
			</form>
		);
	}
}

export default TodoForm;
