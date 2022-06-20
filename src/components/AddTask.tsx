import { useState } from 'react'
import PropTypes from 'prop-types'

type Props = {
    onAdd: (task: { text: string, day: string, reminder: boolean }) => void,
}

const AddTask = (props: Props) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (!text) {
            alert('Please add text description for your task')
            return
        }

        if (!day) {
            alert('Please add a day for your task')
            return
        }

        props.onAdd({ text, day, reminder })
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type="text"
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    onChange={e => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="Save Task" className='btn btn-block' />
        </form>
    )
}

AddTask.propTypes = {
    onDelete: PropTypes.func
}

export default AddTask