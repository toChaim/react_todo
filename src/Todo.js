import React, { Component } from "react";

class Todo extends Component {
	render() {
		return (
			<li
				id={this.props.id}
				className={`Todo ${this.props.complete ? " complete" : ""}`}
			>
				<button onClick={this.props.handleComplete}>
					{this.props.complete ? "Mark Incomplete" : "Mark Complete"}
				</button>
				{this.props.name}
				<button onClick={this.props.handleEdit}>Edit</button>
				<button onClick={this.props.handleDelete}>Remove</button>
			</li>
		);
	}
}

export default Todo;
