import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

export type Props = {
  task: { id: number, text: string, day: string, reminder: boolean },
  onDelete: (id: number) => void,
  onToggle: (id: number) => void
}

const Task = (props: Props) => {
  return (
    <div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={() => props.onToggle(props.task.id)}>
      <h3>
        {props.task.text}
        <FaTimes
          style={{ color: 'red' }}
          onClick={() => props.onDelete(props.task.id)}
        />
      </h3>
      <p>{props.task.day}</p>
    </div>
  )
}

Task.propTypes = {
  onDelete: PropTypes.func
}

export default Task