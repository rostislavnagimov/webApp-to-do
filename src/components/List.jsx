import React, { useState } from 'react'

export const List = ({name, updateTask}) => {
  const data = JSON.parse(localStorage.getItem('lists'))
  const list = data.find(list => list.name === name)

  const addTask = (task) => {
    if (list.tasks.length === 0) {
      updateTask(list.name, [{task: task, checked: false}])
    } else {
      const updated = [...list.tasks, {task: task, checked: false}]
      updateTask(list.name, updated)
    }
  }

  const deleteTask = (index) => {
    const updatedTasks = list.tasks.filter((_, taskIndex) => taskIndex !== index);
    updateTask(list.name, updatedTasks);
  };

  const checkTask = (index) => {
    const updatedTasks = list.tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return {...task, checked: !task.checked}
      }
      return task; 
    })
    updateTask(list.name, updatedTasks);
  }


  return (
    <div className='list'>
      <header>{list.name}</header>
      {list.tasks.length === 0 && (
        <p>No tasks</p>
      )}
      {list.tasks.length > 0 && (
        <ul>
          {list.tasks.map((task, index) => (
            <li>
              <span
                className={task.checked ? 'checkbox--checked' : 'checkbox'}
                onClick={() => checkTask(index)}
              ></span>
              <p>{task.task}</p>
              <span className="cross" onClick={() => {deleteTask(index)}}>X</span>
            </li>
          ))}
        </ul>
      )}
      <div className="addtask">
        <input id="addtask" />
        <button onClick={() => {addTask(document.getElementById('addtask').value)}}>Add</button>
      </div>
    </div>
  )
}