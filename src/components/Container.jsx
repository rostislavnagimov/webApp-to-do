import React, { useState } from 'react'

export const Container = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('lists')))
  const [form, setForm] = useState(false)

  const createList = (name) => {
    if (data) {
      localStorage.setItem('lists', JSON.stringify([...data, {name: name, tasks: []}]))
      setData(JSON.parse(localStorage.getItem('lists')))
    } else {
      localStorage.setItem('lists', JSON.stringify([{name: name, tasks: []}]))
      setData(JSON.parse(localStorage.getItem('lists')))
    }
  }

  const deleteList = (name) => {
    const updated = data.filter(list => list.name !== name)
    localStorage.setItem('lists', JSON.stringify(updated))
    setData(JSON.parse(localStorage.getItem('lists')))
  }
  console.log(data)

  return (
    <>
      <header>My Lists</header>
      <main>
        {form && 
          <div className='form' onClick={() => {setForm(false)}}>
            <div onClick={(e) => e.stopPropagation()}>
              <label>Название списка</label>
              <input type="text" id="listName"></input>
              <button
                onClick = {() => {createList(document.getElementById('listName').value); setForm(false)}}
              >
                Создать
              </button>
            </div>
          </div>
        }
        <div className='lists'>
          {(!data || data.length === 0) && <p>У вас еще нет созданных списков</p>}
            <ul>
              {data && data.map((list) => (
                <li>{list.name} <span onClick={() => {deleteList(list.name)}}>X</span></li>
              ))
              }
            </ul>
        </div>
        <button onClick={() => {setForm(true)}}>Добавить новый список</button>
      </main>
    </>
  )
}
