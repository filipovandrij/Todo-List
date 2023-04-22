import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo, changeText } from '../redux/todoSlice'
import FlagIcon from '@mui/icons-material/Flag'
import { TextareaAutosize, Button } from '@mui/material'
import { useState } from 'react'
import { priorityColorList } from './InputField'

const TaskList = () => {
    const todos = useSelector((state) => state.todos.todos)

    const dispatch = useDispatch()
    const [task, setTask] = useState({ editingTaskId: '', editedTaskText: '' })

    const handleTaskChange = (editingTaskId) => (event) => {
        const editedTaskText = event.target.value

        setTask({ editingTaskId, editedTaskText })
        dispatch(changeText({ id: editingTaskId, text: editedTaskText }))
    }

    const handleChangeTaskComplete = (id) => () => {
        dispatch(toggleTodo({ id }))
    }

    const handleDeleteTask = (id) => () => {
        dispatch(removeTodo({ id }))
    }

    return (
        <ul>
            <h2>YOUR TASKS</h2>
            {todos.map(({ id, text, completed, important }) => (
                <li className="new_task" key={id}>
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={completed}
                        onChange={handleChangeTaskComplete(id)}
                    />

                    <TextareaAutosize
                        className="this_text"
                        minRows={5}
                        defaultValue={
                            id === task.editingTaskId
                                ? task.editedTaskText
                                : text
                        }
                        variant="filled"
                        onChange={handleTaskChange(id)}
                    />
                    <FlagIcon color={priorityColorList[important].color} />
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={handleDeleteTask(id)}
                    >
                        DELETE
                    </Button>
                </li>
            ))}
        </ul>
    )
}
export default TaskList
