import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({ toDoList, handleToggle, handleFilter }) {
  return (
    <div>
      {toDoList.map((toDo) => {
        return (
          <ToDo
            key={toDo.id}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
            toDo={toDo}
          />
        )
      })}
      <button onClick={handleFilter}>Clear</button>
    </div>
  )
}
