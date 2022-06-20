import Header from './components/Header'
import TaskList from './components/TaskList'
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Eat sandwich",
      "day": "Tomorrow at 16:30",
      "reminder": true
    }
  ])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async (id: number) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    setTasks([])
    getTasks()
  }, [])

  const addTask = async (task: { text: string, day: string, reminder: boolean }) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()

    setTasks([...tasks, data])
  }

  const deleteTask = async (id: number) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = async (id: number) => {
    const task = await fetchTask(id)
    const updatedTask = { ...task, reminder: !task.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json()

    setTasks(
      tasks.map(
        task => task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header onButtonClick={() => setShowForm(!showForm)} showForm={showForm} />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showForm && <AddTask onAdd={addTask} />}
                {
                  tasks.length > 0 ?
                    <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                    : 'There are no tasks to show, ma boi'
                }
                <Footer />
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
