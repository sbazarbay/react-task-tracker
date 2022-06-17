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

  return (
    <div className="container">
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
