import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const TodoList = () => {

  const dispatch = useDispatch();

  const state = useSelector((state) => state.app.todos)
  console.log(state)
  return (
    <>
      <h2>Todo List</h2>


      {state.map((el) => {
        return (
          <div>
            <h1>{ el.title}</h1>
          </div>
        )
      })
      }
    </>
  );
}

export default TodoList;