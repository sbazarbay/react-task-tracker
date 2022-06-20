import Header from './components/Header'
import TaskList from './components/TaskList'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Eat sandwich',
      day: 'Tomorrow at 16:30',
      reminder: true
    },
    {
      id: 2,
      text: 'Update Pet-project',
      day: 'Yesterday at 8:00',
      reminder: false
    },
    {
      id: 3,
      text: 'Fly to the moon',
      day: 'Sometime in 2040',
      reminder: true
    },
    {
      id: 4,
      text: 'Buy new clothes',
      day: 'Next week',
      reminder: true
    }
  ])

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {
        tasks.length > 0 ?
          <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          : 'There are no tasks to show, ma boi'
      }
    </div>
  );
}

export default App;
