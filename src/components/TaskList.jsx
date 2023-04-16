import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../redux/todoSlice'

const TaskList = () => {
    const task = useSelector((state) => state.todos.todos)

    const dispatch = useDispatch()

    console.log(task)

    return (
        <ul>
            {task.map(({ id, text, completed, important }) => (
                <li key={id}>
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={completed}
                        onChange={() => dispatch(toggleTodo({ id }))}
                    />
                    <span className={important}></span>
                    <p className="text">{text}</p>
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