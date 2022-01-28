import { useState } from 'react';
import InputField from './InputField';
import ListFooter from './ListFooter';

export default function Card() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  return (
    <div className="card-container">
      <InputField
        input={input}
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
      />

      {tasks.length > 0 && <ListFooter tasks={tasks} setTasks={setTasks} />}
    </div>
  );
}
