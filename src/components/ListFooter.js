import { useEffect, useState } from 'react';
import List from './List';

export default function ListFooter({ tasks, setTasks }) {
  const [completed, setCompleted] = useState([]);
  const [active, setActive] = useState([]);
  const [status, setStatus] = useState('all');

  useEffect(() => {
    const tempCompleted = tasks.filter((task) => task.completed);
    setCompleted(tempCompleted);

    const tempActive = tasks.filter((task) => !task.completed);
    setActive(tempActive);
  }, [tasks]);

  function handleCompleted() {
    setCompleted([]);
    const newTasks = tasks.filter((task) => task.completed === false);
    setTasks(newTasks);
  }

  return (
    <div className="card-list">
      <List
        tasks={
          status === 'all' ? tasks : status === 'active' ? active : completed
        }
        setTasks={
          status === 'all'
            ? setTasks
            : status === 'active'
            ? setActive
            : setCompleted
        }
        OgArray={tasks}
        OgSetArray={setTasks}
      />
      <div className="footer">
        <span className="items-left">{`${active.length} items left`}</span>
        <button
          className={'footer-all ' + (status === 'all' ? 'border-active' : '')}
          onClick={() => setStatus('all')}
        >
          All
        </button>
        <button
          className={
            'footer-active ' + (status === 'active' ? 'border-active' : '')
          }
          onClick={() => setStatus('active')}
        >
          Active
        </button>
        <button
          className={
            'footer-completed ' + (status === 'comp' ? 'border-active' : '')
          }
          onClick={() => setStatus('comp')}
        >
          Completed
        </button>
        <button
          className={
            'footer-clear ' + (completed.length === 0 ? 'visibility' : '')
          }
          onClick={handleCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}
