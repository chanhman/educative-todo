import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({ toDoList }) {
  return (
    <div>
      {toDoList.map((toDo) => {
        return <ToDo key={toDo.id} toDo={toDo} />
      })}
    </div>
  )
}
