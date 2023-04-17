import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo, changeText } from '../redux/todoSlice'
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

    console.log(task)

    return (
        <ul>
            <h3>To-do list</h3>
            {task.map(({ id, text, completed, important }) => (
                <li key={id}>
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={completed}
                        onChange={() => dispatch(toggleTodo({ id }))}
                    />
                    <input
                        type="text"
                        value={id === editingTaskId ? editedTaskText : text}
                        className="text"
                        onChange={(event) => handleTaskChange(event, id)}
                    />
                    <span className={important}></span>
                    <button
                        className="delete"
                        onClick={() => dispatch(removeTodo({ id }))}
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    )
}
export default TaskList
