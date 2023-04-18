import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo, changeText } from '../redux/todoSlice'
import FlagIcon from '@mui/icons-material/Flag'
import { TextareaAutosize, Button } from '@mui/material'
import { useState } from 'react'

const TaskList = () => {
    const task = useSelector((state) => state.todos.todos)

    const dispatch = useDispatch()

    const [editingTaskId, setEditingTaskId] = useState('')
    const [editedTaskText, setEditedTaskText] = useState('')

    const handleTaskChange = (event, id) => {
        const newTaskText = event.target.value

        setEditingTaskId(id)
        setEditedTaskText(newTaskText)
        dispatch(changeText({ id, text: newTaskText }))
    }

    const changePriority = (value) => {
        if (value === 'important') return 'error'
        else if (value === 'not-important') return 'success'
        else return 'primary'
    }
    console.log(task)

    return (
        <ul>
            <h2>YOUR TASKS</h2>
            {task.map(({ id, text, completed, important }) => (
                <li className="new_task" key={id}>
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={completed}
                        onChange={() => dispatch(toggleTodo({ id }))}
                    />

                    <TextareaAutosize
                        className="this_text"
                        minRows={5}
                        defaultValue={
                            id === editingTaskId ? editedTaskText : text
                        }
                        variant="filled"
                        onChange={(event) => handleTaskChange(event, id)}
                    />
                    <FlagIcon color={changePriority(important)} />
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => dispatch(removeTodo({ id }))}
                    >
                        DELETE
                    </Button>
                </li>
            ))}
        </ul>
    )
}
export default TaskList
