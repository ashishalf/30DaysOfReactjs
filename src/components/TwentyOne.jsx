// TODO App using useReduser
import React, { useReducer, useState } from "react";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newStateAdd = [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
      localStorage.setItem("tasks", JSON.stringify(newStateAdd));
      return newStateAdd;

    case "REMOVE":
      const newStateRemove = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newStateRemove));
      return newStateRemove;

    case "TOGGLE":
      const newStateToggle = state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(newStateToggle));
      return newStateToggle;

    default:
      return state;
  }
};

function TwentyOne() {
  const [taskText, setTaskText] = useState("");

    const [tasks, dispatch] = useReducer(
    taskReducer,
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const addTask = () => {
    if (taskText.trim()) {
      dispatch({ type: "ADD_TASK", payload: taskText });
      setTaskText(""); 
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add New Task"
      />
      <button onClick={addTask}>Add</button>
      <div>
        {tasks.map((task) => (
          <>
            <label key={task.id}>
              <input
                type="checkbox"
                value={task.id}
                onClick={() => dispatch({ type: "TOGGLE", payload: task.id })}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>

              <button
                onClick={() => dispatch({ type: "REMOVE", payload: task.id })}
              >
                Remove
              </button>
            </label>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default TwentyOne;
