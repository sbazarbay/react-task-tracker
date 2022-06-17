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

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <TaskList tasks={tasks} onDelete={deleteTask} /> : 'There are no tasks to show, ma boi'}
    </div>
  );
}

export default App;
