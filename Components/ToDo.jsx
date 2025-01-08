import React, { useState } from 'react'

const ToDo = () => {
  const[todo, setTodo] = useState([]);

  const addTask = (event) => {
    event.preventDefault(); 
    const task = event.target.task.value.trim(); 
    if (task) {
      setTodo([...todo, task]); 
      event.target.reset(); 
    }
  };

  return (
    <div>
        <h1>ToDo App</h1>
        <form onSubmit={addTask}>
        <input type="text" name="task" placeholder="Add your task" />
        <button type="submit">Add</button>
        </form>
        <h4>Added Tasks</h4>
        <ul>
        {todo.length !== 0 ? (
            todo.map((t, index) => (
            <li key={index}>{t}</li>
            ))
        ) : (
            <p>No tasks added yet.</p>
        )}
        </ul>
    </div>
  )
}

export default ToDo