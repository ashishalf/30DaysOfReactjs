// TODO List
import React, { useState, useEffect } from "react";
import './styles/todo.css'

function TwentyNine() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)
  const [editInput, setEditInput] = useState('')

  // Retrieve todos from local storage when component mounts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save todos to local storage whenever todos array changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text: input,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
  };

  const enterEditTodo = (id, text)=>{
    setEditMode(true)
    setEditId(id)
    setEditInput(text)
  }

  const updateTodo = ()=>{
    const updateTodos = todos.map((todo)=>{
        if(todo.id===editId){
            return {...todo, text:editInput}
        }
        return todo
    })
    setTodos(updateTodos)
    setEditMode(false)
    setEditId(null)
    setEditInput('')
  }


  return (
    <div>
    <div className="todo-container">
      <h1>Todo List</h1>
      <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {
        editMode ? (
            <div>
                <input type="text" value={editInput} onChange={(e)=> setEditInput(e.target.value)} />
                <button onClick={updateTodo}>Update</button>
            </div>
        ):(
            <button onClick={addTodo}>Add</button>
        )
      }
      </div>
      </div>
      <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Remove</button>
            <button onClick={() => enterEditTodo(todo.id, todo.text)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default TwentyNine;
