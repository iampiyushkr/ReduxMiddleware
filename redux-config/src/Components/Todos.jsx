
import React from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuid } from "uuid"
import { addTodo } from '../redux/todos/action';

const Todos = () => {
    const [title, setTitle] = React.useState("");

    const dispatch = useDispatch();


    const handleAdd = () => {

        const addTododAction = addTodo(title)
        dispatch(addTododAction)
    };
    return (
        <div>
            <h1>Add Todos</h1>
            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="add something.." />
            <button onClick={handleAdd}>ADD</button>

        </div>
    );
}

export default Todos;