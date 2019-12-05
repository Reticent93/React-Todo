// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// receives Todo array and iterates over

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	return (
		<div className="todoList">
			{this.state.task.map((item) => (
				<Todo key={item.id} item={item} onClick={(e) => props.toggleTask(e, item.id)} />
			))}
		</div>
	);
};
export default TodoList;
