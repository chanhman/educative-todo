import React, { useState } from 'react'
import data from './data.json'
import './App.css'
import Header from './Header'
import ToDoList from './ToDoList'

function App() {
  const [toDoList, setToDoList] = useState(data)
  const [userInput, setUserInput] = useState('')

  const addTask = (userInput) => {
    let copy = [...toDoList]
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false}]
    setToDoList(copy)
  }

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task }
    })
    setToDoList(mapped)
  }

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete
    })
    setToDoList(filtered)
  }

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }

  return (
    <div className="App">
      <Header />
      <ToDoList
        handleFilter={handleFilter}
        handleToggle={handleToggle}
        toDoList={toDoList}
      />
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default App
