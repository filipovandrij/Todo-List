import { useState } from 'react'
import './App.css'

function App() {

    const[todos,setTodos] = useState([])
    const[text,setText] = useState('')


    const addTodo = () => {
        setTodos([
            ...todos,
            {
                id: ++todos.length,
                text,
                completed: false,
            },
        ]);
        setText('')
    }

    const removeTodo = (todoId) => {
        setTodos(todo => todo.id !== todoId)
    }



return <div className="App">
    <label htmlFor="">
        <input type={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTodo()}>add task</button>
    </label>
    <ul>


        {todos.map(
            todo => <li key={todo.id}>
                <input type="checkbox" />
                <span>{todo.text}</span>
                <span onClick={() => removeTodo(todo.id)} className='delete'>&times;</span>
            </li>
        )}
    </ul>
</div>

}

export default App

