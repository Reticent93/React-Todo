import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { task } from './components/TodoComponents/task';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	constructor() {
		super();
		this.state = {
			task: task
		};
	}
	toggleTask = (taskId) => {
		this.setState({
			task: this.state.task.map((item) => {
				if (taskId === item.id) {
					return {
						...item,
						completed: !item.completed
					};
				}
				return item;
			})
		});
	};

	addTask = (taskText) => {
		const newTodo = {
			name: taskText,
			id: Date.now(),
			completed: false
		};

		this.setState({
			task: [ ...this.state.task, newTodo ]
		});
	};

	render() {
		return (
			<div className="App">
				<h2>Welcome to your Todo App!</h2>
				<TodoForm addTask={this.addTask} />

				<TodoList task={this.state.task} toggleTask={this.toggleTask} />
			</div>
		);
	}
}

export default App;
