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
            <label htmlFor="">
                <select onChange={(e) => setImportant(e.target.value)}>
                    <option value="important">Important</option>
                    <option value="medium">Medium</option>
                    <option value="not-important">Not-important</option>
                </select>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setTextValue(e.target.value)}
                />
                <button onClick={() => addTask()}>add task</button>
            </label>
        </div>
    )
}
export default InputField
