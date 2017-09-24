import React, { Component } from "react";

class EditTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { todo: this.props.name || "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		//console.log(e.target.value);
		this.setState({ todo: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.handleSave(e);
		this.setState({ todo: "" });
	}

	render() {
		return (
			<li id={this.props.id}>
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
			</li>
		);
	}
}

export default EditTodoForm;
