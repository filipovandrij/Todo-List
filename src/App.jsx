import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import TaskList from './components/TaskList'

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
            <InputField
                textValue={text}
                textChange={setText}
                addText={addTodo}
            />
            <TaskList
                toggleComleteTodo={toggleComleteTodo}
                removeTodo={removeTodo}
                todos={todos}
            />
        </div>
    )
}

export default App
