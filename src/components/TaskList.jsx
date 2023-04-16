const TaskList = ({ toggleComleteTodo, removeTodo, todos }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        checked={todo.comleted}
                        onChange={() => toggleComleteTodo(todo.id)}
                        className="checkbox"
                        type="checkbox"
                    />
                    <p className="text">{todo.text}</p>
                    <button
                        className="delete"
                        onClick={() => removeTodo(todo.id)}
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    )
}
export default TaskList
