import React, { useState } from 'react';

export default function Form({ addTask }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={userInput}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
