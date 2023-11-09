import React, { useState } from 'react'

export const List = (name) => {
  const data = JSON.parse(localStorage.getItem('lists'))
  const list = data.find(list => list.name === name.data)

  return (
    <div className='list'>
      <header>{list.name}</header>
      {list.tasks.length === 0 && (
        <p>No tasks</p>
      )}


    </div>
  )
}