import { useState } from 'react';

export default function List({ tasks, setTasks }) {
  const [editTask, setEditTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  function handleChange(event) {
    setEditTask(event.target.value);
  }

  function handleSubmit(e) {
    if (e.key === 'Enter') {
      const tempTasks = tasks.map((task) => {
        return task.id === editingIndex
          ? { ...task, id: task.id, value: editTask }
          : task;
      });
      setTasks(tempTasks);
      setEditingIndex(-1);
    }
    if (e.key === 'Escape') {
      setEditingIndex(-1);
    }
  }

  function handleBlur() {
    setEditingIndex(-1);
  }

  return tasks.map((task) =>
    editingIndex === task.id ? (
      <input
        key={task.id}
        type="text"
        defaultValue={task.value}
        onChange={handleChange}
        onKeyDown={handleSubmit}
        onBlur={handleBlur}
      />
    ) : (
      <div key={task.id} className="list-item">
        <input type="checkbox" />
        <p
          onDoubleClick={() => {
            setEditingIndex(task.id);
          }}
        >
          {task.value}
        </p>
        <button className="close-button">x</button>
      </div>
    )
  );
}
