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
        setTodos(todos.filter(todo => todo.id !== todoId))
    }



    const toggleTodoComlete = (todoId) => {
        setTodos(
            todos.map(todo =>{ 
                if (todo.id !== todoId) return todo;
            
                return{
                    ...todo,
                    completed: !todo.completed,
                }
            }
            )
        )
    }






return <div className="App">
    <label htmlFor="">
        <input type={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTodo()}>add task</button>
    </label>
    <ul>


        {todos.map(
            todo => <li key={todo.id}>
                <input type="checkbox" checked onChange={() => toggleTodoComlete(todo.id)}/>
                <span>{todo.text}</span>
                <span onClick={() => removeTodo(todo.id)} className='delete'>&times;</span>
            </li>
        )}
    </ul>
</div>

}

export default App

