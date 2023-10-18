// @ts-ignore
import React, {useState} from "react";
import './App.css';
import {TodoTable} from "./components/TodoTable"; //starts at src
import {NewTodoForm} from "./components/NewTodoForm";

export const  App = () => {
	
	const [showAddTodoForm, setShowAddTodoForm] = useState(false);
	
	const [todos, setTodos] = useState( [
		{rowNumber: 1, rowDescription: 'Feed Chupa', rowAssigned: 'Rynda'},
		{rowNumber: 2, rowDescription: 'Make Dinner', rowAssigned: 'Gage'},
		{rowNumber: 3, rowDescription: 'Water Plants', rowAssigned: 'Rynda'},
		{rowNumber: 4, rowDescription: 'Code things', rowAssigned: 'Gage'},
		{rowNumber: 5, rowDescription: 'Win', rowAssigned: 'Gage'},
	])
	const addTodo = (description: string, assigned: string) => {
		let rowNumber = 0;
		if(todos.length > 0) {
			rowNumber = todos[todos.length - 1].rowNumber + 1;
		} else {
			rowNumber = 1;
		}
		const newTodo = {
			rowNumber: rowNumber,
			rowDescription: description,
			rowAssigned: assigned
		}
		setTodos(todos => [...todos, newTodo]);
	}
	
	const deleteTodo = (deleteTodoRowNumber: number) => {
		let filtered = todos.filter(function(value){
			return value.rowNumber !== deleteTodoRowNumber;
		});
		setTodos(filtered);
	}
	
	return (
		<div className='mt-5 container'>
			<div className='card'>
				<div className='card-header'>
					Todo's
				</div>
				<div className='card-body'>
					<TodoTable todos={todos} deleteTodo={deleteTodo}/>
					<button
						onClick={() => setShowAddTodoForm(!showAddTodoForm)}
						className='btn btn-primary'
					>
						{showAddTodoForm ? 'Close New Todo' : 'Add New Todo'}
					</button>
					{showAddTodoForm &&
						<NewTodoForm addTodo={addTodo}/>
					}
				</div>
			</div>
		</div>
	);
}