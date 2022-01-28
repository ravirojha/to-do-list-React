import { useState } from 'react';

export default function InputField(props) {
  const [tick, setTick] = useState(false);

  function handleChange(event) {
    event.preventDefault();
    props.setInput(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (props.input !== '') {
      const tempTasks = [
        { id: props.tasks.length, value: props.input, completed: false },
        ...props.tasks
      ];

      props.setTasks(tempTasks);
      props.setInput('');
    }
  }

  function handleIconClick() {
    const tempTasks = props.tasks.map((task) => {
      return { ...task, completed: !tick };
    });
    props.setTasks(tempTasks);
    setTick(!tick);
  }

  return (
    <form onSubmit={handleSubmit} className="card-input">
      <i class="fas fa-chevron-down icon" onClick={handleIconClick}></i>
      <input
        className="card-input-task"
        type="text"
        name="task"
        value={props.input}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
    </form>
  );
}
