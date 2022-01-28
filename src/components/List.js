import { useState } from 'react';

export default function List({ tasks, setTasks, OgArray, OgSetArray }) {
  const [editTask, setEditTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  function handleChange(event) {
    setEditTask(event.target.value);
  }

  function handleSubmit(e) {
    if (e.key === 'Enter' && editTask !== '') {
      const tempTasks = tasks.map((task) => {
        return task.id === editingIndex
          ? { ...task, id: task.id, value: editTask }
          : task;
      });
      setTasks(tempTasks);

      const tempArray = OgArray.map((OgTask) => {
        return OgTask.id === editingIndex
          ? { ...OgTask, id: OgTask.id, value: editTask }
          : OgTask;
      });

      OgSetArray(tempArray);
      setEditingIndex(-1);
    } else if (e.key === 'Enter' && editTask === '') {
      const tempTasks = [...tasks];
      tempTasks.splice(editingIndex, 1);
      setTasks(tempTasks);

      const tempArray = [...OgArray];
      tempArray.splice(editingIndex, 1);
      OgSetArray(tempArray);

      setEditingIndex(-1);
    }
    if (e.key === 'Escape') {
      setEditingIndex(-1);
    }
  }

  function handleBlur() {
    if (editTask !== '') {
      const tempTasks = tasks.map((task) => {
        return task.id === editingIndex
          ? { ...task, id: task.id, value: editTask }
          : task;
      });
      setTasks(tempTasks);

      const tempArray = OgArray.map((OgTask) => {
        return OgTask.id === editingIndex
          ? { ...OgTask, id: OgTask.id, value: editTask }
          : OgTask;
      });
      OgSetArray(tempArray);
      setEditingIndex(-1);
    } else if (editTask === '') {
      const tempTasks = [...tasks];
      tempTasks.splice(editingIndex, 1);
      setTasks(tempTasks);

      const tempArray = [...OgArray];
      tempArray.splice(editingIndex, 1);
      OgSetArray(tempArray);
      setEditingIndex(-1);
    }
  }

  function handleCheck(taskChecked) {
    if (taskChecked.completed === false) {
      const tempTasks = tasks.map((task) => {
        return task.id === taskChecked.id ? { ...task, completed: true } : task;
      });
      setTasks(tempTasks);

      const tempArray = OgArray.map((OgTask) => {
        return OgTask.id === taskChecked.id
          ? { ...OgTask, completed: true }
          : OgTask;
      });
      OgSetArray(tempArray);
    } else {
      const tempTasks = tasks.map((task) => {
        return task.id === taskChecked.id
          ? { ...task, completed: false }
          : task;
      });
      setTasks(tempTasks);

      const tempArray = OgArray.map((OgTask) => {
        return OgTask.id === taskChecked.id
          ? { ...OgTask, completed: false }
          : OgTask;
      });
      OgSetArray(tempArray);
    }
  }

  function handleClose(id) {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);

    const newOgTasks = OgArray.filter((OgTask) => {
      return OgTask.id !== id;
    });
    OgSetArray(newOgTasks);
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
      <div
        key={task.id}
        className="list-item"
        onDoubleClick={() => {
          setEditingIndex(task.id);
          setEditTask(task.value);
        }}
      >
        <input
          type="checkbox"
          className='checkBox'
          checked={task.completed}
          onClick={() => {
            handleCheck(task);
            // console.log(task);
          }}
        />
        <p className={'list-text ' + (task.completed ? 'line-through' : '')}>
          {task.value}
        </p>
        <button
          className="close-button"
          onClick={() => {
            handleClose(task.id);
          }}
        >
          x
        </button>
      </div>
    )
  );
}
