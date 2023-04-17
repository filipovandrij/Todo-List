import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
import { useState } from 'react'

const InputField = () => {
    const [text, setTextValue] = useState('')
    const [important, setImportant] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodo({ text, important }))
        setTextValue('')
    }

    return (
        <div>
            <h3>Create Task</h3>
            <label htmlFor="">
                <select onChange={(e) => setImportant(e.target.value)}>
                    <option value="important">IMPORTANT</option>
                    <option value="medium">MEDIUM</option>
                    <option value="not-important">NOT-IMPORTANT</option>
                </select>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setTextValue(e.target.value)}
                />
                <button onClick={() => addTask()}>DONE</button>
            </label>
        </div>
    )
}
export default InputField
