import React, { Component } from 'react';






export class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			value: ''
		};
	}

	handleChange = (e) => {
        
		this.setState({
            value: e.target.value
            
		});console.log('this',e)
	};

	handleSubmit = (e) => {
		this.props.addTask(e, this.state.value);
        e.preventDefault();
        this.state({
            value: ''
        })
		console.log('submit', this.state);
	};

	render() {
		return (
			<div className="todoForm">
				<form onSubmit={this.handleSubmit}>
					<input input="text" value={this.state.value} onChange={this.handleChange} />
				</form>
				<button type="submit">Submit</button>
			</div>
		);
	}
}

export default TodoForm;
