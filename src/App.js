import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { task } from './components/TodoComponents/task';
import './components/TodoComponents/Todo.css';
import Todo from './components/TodoComponents/Todo';

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
	toggleTask = (e, taskId) => {
		e.preventDefault();
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

	clearTask = (e) => {
		e.preventDefault();
		this.setState({
			task: this.state.task.filter((item) => {
				return !item.completed;
			})
		});
	};

	render() {
		return (
			<div className="App">
				<div className="header">
					<h2>Welcome to your Todo App!</h2>
				</div>
				<TodoForm addTask={this.addTask} />

				<div className="todoList">
					{this.state.task.map((item) => (
						<Todo key={item.id} item={item} onClick={(e) => this.toggleTask(e, item.id)} />
					))}
					<button className="clear-btn" onClick={this.clearTask}>
						Clear Task
					</button>
				</div>
			</div>
		);
	}
}

export default App;
