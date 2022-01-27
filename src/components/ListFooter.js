import List from './List';

export default function ListFooter({ tasks, setTasks }) {
  return (
    <>
      <List tasks={tasks} setTasks={setTasks} />I am the list footer
    </>
  );
}
