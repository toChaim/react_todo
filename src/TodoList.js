import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import EditTodoForm from "./EditTodoForm";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = JSON.parse(localStorage.getItem("todoState")) || {
			idCnt: 2,
			todos: [
				{ name: "Have fun programming", id: 1, complete: false },
				{ name: "Take a nap.", id: 2, complete: false }
			]
		}
		this.handleComplete = this.handleComplete.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleDeleteList = this.handleDeleteList.bind(this);
	}

	handleComplete(e) {
		console.log(e.target.parentElement.className);
		var id = +e.target.parentElement.id;

		var newState = this.state.todos.map(v => {
			if (v.id === id) {
				console.log(v, v.id, id);
				return Object.assign({}, v, { complete: !v.complete });
			}
			return v;
		});

		console.log(newState);
		this.setState({ todos: newState }, () => {
			localStorage.setItem("todoState", JSON.stringify(this.state));
		});
	}

	handleAdd(e) {
		e.preventDefault();
		//console.log(e.target.todo.value);
		this.setState(
			{ 
				todos: this.state.todos.concat([{ name: e.target.todo.value, id: this.state.idCnt + 1 }]), 
				idCnt: this.state.idCnt + 1 
			}, 
				() => {
			localStorage.setItem("todoState", JSON.stringify(this.state));
		});
	}

	handleEdit(e) {
		var id = +e.target.parentElement.id;

		var newState = this.state.todos.map(v => {
			if (v.id === id) {
				console.log(v, v.id, id);
				return Object.assign({}, v, { showEdit: true });
			}
			return v;
		});

		console.log(newState);
		this.setState({ todos: newState }, () => {
			console.log("STATE:", this.state);
		});
	}

	handleSave(e) {
		e.preventDefault();
		var id = +e.target.parentElement.id;
		//console.log(e.target.todo.value);
		var newState = this.state.todos.map(v => {
			if (v.id === id) {
				console.log(v, v.id, id);
				return { name: e.target.todo.value, id: id };
			}
			return v;
		});
		this.setState({ todos: newState }, () => {
			localStorage.setItem("todoState", JSON.stringify(this.state));
		});
	}

	handleDeleteList(e) {
		let newState = {todos:[], idCnt: 0};
		localStorage.setItem("todoState", JSON.stringify(newState)); 
		this.setState(newState);
	}

	handleDelete(e) {
		var id = +e.target.parentElement.id;
		var newState = this.state.todos.filter(v => v.id !== id);
		this.setState({ todos: newState }, () => {
			localStorage.setItem("todoState", JSON.stringify(this.state));
		});
	}

	render() {
		var todoItems = this.state.todos.map(v => {
			if (v.showEdit) {
				return (
					<EditTodoForm
						key={v.id}
						id={v.id}
						name={v.name}
						handleSave={this.handleSave}
					/>
				);
			}
			return (
				<Todo
					key={v.id}
					id={v.id}
					name={v.name}
					complete={v.complete}
					handleComplete={this.handleComplete}
					handleEdit={this.handleEdit}
					handleDelete={this.handleDelete}
				/>
			);
		});
		return (
				
				<ul className="TodoList">
					<h1>{this.props.title}</h1>
					<NewTodoForm handleAdd={this.handleAdd} />
				<button onClick={this.handleDeleteList}>Delete List</button>
					{todoItems}
				</ul>
		);
	}
}

export default TodoList;
