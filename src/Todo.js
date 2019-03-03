import React, { Component } from "react";

class Todo extends Component {
	render() {
		return (
			<li
				id={this.props.id}
				className={`Todo ${this.props.complete ? " complete" : ""}`}
			>
				<input type="checkbox" onClick={this.props.handleComplete} value={this.props.complete}/>
				{this.props.name}
				<button onClick={this.props.handleEdit}>✎</button>
			</li>
		);
	}
}

export default Todo;
