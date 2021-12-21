import React from 'react';

export default function ToDo({ todo, handleToggle, handleFilter }) {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.target.id);
  };
  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      name="todo"
      value={todo.id}
      onClick={handleClick}
      className={todo.complete ? 'todo strike' : 'todo'}
    >
      {todo.task}
    </div>
  );
}
