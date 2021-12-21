import React, { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import data from './data.json';

function App() {
  const [toDoList, setToDoList] = useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (input) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: input, complete: false }];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <Form addTask={addTask} />
    </div>
  );
}

export default App;
