import { FaTimes } from 'react-icons/fa'

type Props = { task: any }

const Task = (props: Props) => {
  return (
    <div className='task'>
      <h3>{props.task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} /></h3>
      <p>{props.task.day}</p>
    </div>
  )
}

export default Task