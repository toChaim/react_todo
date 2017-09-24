import React, { Component } from "react";

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { todo: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		//console.log(e.target.value);
		this.setState({ todo: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.handleAdd(e);
		this.setState({ todo: "" });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="todo">Add Todo Here: </label>
				<input
					type="text"
					name="todo"
					id="todo"
					value={this.state.todo}
					onChange={this.handleChange}
				/>
				<button type="submit">Save</button>
			</form>
		);
	}
}

export default NewTodoForm;
