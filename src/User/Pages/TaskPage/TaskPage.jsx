import React, { useState } from 'react';
import './TaskPage.css';

const TaskPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description for Task 1', dueDate: '2024-06-10', priority: 'High', status: 'Pending' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', dueDate: '2024-06-11', priority: 'Medium', status: 'Completed' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', dueDate: '2024-06-12', priority: 'Low', status: 'Pending' },
    { id: 4, title: 'Task 4', description: 'Description for Task 4', dueDate: '2024-06-13', priority: 'Medium', status: 'Pending' },
    { id: 5, title: 'Task 5', description: 'Description for Task 5', dueDate: '2024-06-14', priority: 'High', status: 'Completed' }
  ]);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <main className="task-page">
      <h1>Task Page</h1>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className="task">
            <h2>{task.title}</h2>
            <p>Description: {task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TaskPage;
