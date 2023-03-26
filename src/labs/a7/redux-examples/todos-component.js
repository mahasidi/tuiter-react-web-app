import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
	const todos
		= useSelector(state => state.todos);
	// sets up the layout to be able to change the object
	// initially the property is empty
	const [todo, setTodo] = useState({do: ''});
	const dispatch = useDispatch();
	const toggleTodoDone = (todo) => {
		dispatch(todoDoneToggle(todo))
	}
	const deleteToDoClickHandler = (index) => {
		dispatch(deleteTodo(index));
	}
	const createTodoClickHandler = () => {
		dispatch(addTodo(todo));
	}

	// changes the property by using text that has been typed
	const todoChangeHandler = (event) => {
		const doValue = event.target.value;
		const newTodo = {
			do: doValue
		};
		// sets it
		setTodo(newTodo);
	}
	return(
		<>
			<h3>Todos</h3>
			<ul className="list-group">
				<li className="list-group-item">
					<button onClick={createTodoClickHandler}
					className="btn btn-primary w-25 float-end">Create</button>
					<input
						// event handler
					onChange={todoChangeHandler}
					// the new value
					value={todo.do}
					className="form-control w-75"
					/>
				</li>
				{
					todos.map((todo, index) =>
						<li key={todo._id} className="list-group-item">
							<button onClick={() =>
							deleteToDoClickHandler(index)
							} className="btn btn-danger float-end ms-2">Delete</button>
							<input
							type="checkbox"
							checked={todo.done}
							onChange={() =>
							toggleTodoDone(todo)}
							className="me-2"
							/>
							{todo.do}
						</li>
					)
				}
			</ul>
		</>
	);
};
export default Todos;
