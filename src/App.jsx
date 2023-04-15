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


console.log(todos)

return <div className="App">
    <label htmlFor="">
        <input type={text} onChange={(e) => setTodos(e.target.value)} />
        <button onClick={() => addTodo()}>add task</button>
    </label>
    <ul>
        <li>
            <input type="checkbox" />
            <span>text</span>
            <span className='delete'>&times;</span>
        </li>
    </ul>
</div>

}

export default App
