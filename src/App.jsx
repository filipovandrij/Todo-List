import { useState } from 'react'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        setTodos([
            ...todos,
            {
                id: ++todos.length,
                text,
                comleted: false,
            },
        ])
        setText('')
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId))
    }

    const toggleComleteTodo = (todoId) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id !== todoId) return todo
                return {
                    ...todo,
                    comleted: !todo.comleted,
                }
            })
        )
    }

    return (
        <div className="App">
            <label htmlFor="">
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <button onClick={addTodo}>add task</button>
            </label>
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
        </div>
    )
}

export default App
