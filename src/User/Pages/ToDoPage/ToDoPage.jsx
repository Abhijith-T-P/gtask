import React, { useState } from 'react';
import './ToDoPage.css';

const ToDoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="todo-page">
      <h1>To-Do List</h1>
      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <span>{task.text}</span>
            <div className="button-group">
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoPage;
