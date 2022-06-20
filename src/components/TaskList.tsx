import { Props as TaskProps } from './Task'
import Task from './Task'
import PropTypes from 'prop-types'


type Props = {
  tasks: TaskProps["task"][],
  onDelete: (id: number) => void,
  onToggle: (id: number) => void
}

const TaskList = (props: Props) => {
  return (
    <>
      {props.tasks.map((task: TaskProps["task"]) =>
        <Task
          key={task.id}
          task={task}
          onDelete={props.onDelete}
          onToggle={props.onToggle}
        />
      )}
    </>
  )
}

TaskList.propTypes = {
  onDelete: PropTypes.func
}

export default TaskList