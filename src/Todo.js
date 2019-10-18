import React from "react";

const Todo = ({ id, name, complete, showEdit, handleComplete, handleEdit}) => (
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
			<button onClick={this.props.handleDelete}>✗ Delete</button>
		</form>
	</li>
	<li
		id={id}
		className={`Todo ${complete ? " complete" : ""}`}
	>
		<input type="checkbox" onClick={handleComplete} value={complete} />
		{name}
		<button onClick={handleEdit}>✎</button>
	</li>
)

export default Todo;