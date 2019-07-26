import React from 'react'

const Item = ({ task, onDelete }) => {
  return (
    <div>
      <h2>{task} <button onClick={onDelete}>Delete</button></h2>
    </div>
  )
}

export default Item
