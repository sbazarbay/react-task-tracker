import Task from './Task'

type Props = { tasks: any }

const TaskList = (props: Props) => {
  return (
    <>
      {props.tasks.map((task: any) =>
        <Task task={task} />
      )}
    </>
  )
}

export default TaskList