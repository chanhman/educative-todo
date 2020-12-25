import React from 'react'

export default function ToDo({ toDo, handleToggle }) {
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }
  return (
    <div
      id={toDo.id}
      className={toDo.complete ? 'strike' : ''}
      onClick={handleClick}
    >
      {toDo.task}
    </div>
  )
}
