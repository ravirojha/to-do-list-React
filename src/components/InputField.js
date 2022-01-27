export default function InputField(props) {
  function handleChange(event) {
    event.preventDefault();
    props.setInput(event.target.value);
    // console.log(props.input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const tempTasks = [
      { id: props.tasks.length, value: props.input, completed: false },
      ...props.tasks
    ];
    // console.log(tempTasks);
    props.setTasks(tempTasks);
    props.setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={props.input}
        onChange={handleChange}
      />
    </form>
  );
}
