import { useState } from 'react'
import './App.css'

function App() {


const [todos, setTodos] = useState([])
const [text, setText] = useState('')

const addTodo = () => {
    if (text.trim().length){
    setTodos([
        ...todos,
        {
            id: new Date().toISOString(),
            text,
            completed: false,
        }
    ]);
    setText('');
    }
}


console.log(todos)


    return <div className="App">
            <label htmlFor="">
                <input type={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={addTodo}>Add task</button>
            </label>

        <ul className='task-list'>
            {
                todos.map(todo => 
                <li key={todo.id}>
                    <input className='checkbox' type="checkbox" />
                    <span>{todo.text}</span>
                    <span className='delete'>&times;</span>
                </li>)
            }
        </ul>
    </div>
}

export default App
