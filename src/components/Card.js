import { useState } from 'react';
import InputField from './InputField';
import List from './List';
import ListFooter from './ListFooter';

export default function Card() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <InputField
        input={input}
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
      />

      <ListFooter tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
