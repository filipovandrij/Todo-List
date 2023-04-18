import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

import { Button, TextField, MenuItem, Select } from '@mui/material'
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
            <Select label="Age" onChange={(e) => setImportant(e.target.value)}>
                <MenuItem value="important">IMPORTANT</MenuItem>
                <MenuItem value="medium">MEDIUM</MenuItem>
                <MenuItem value="not-important">NOT-IMPORTANT</MenuItem>
            </Select>
            <TextField
                label="Task name"
                variant="outlined"
                type="text"
                value={text}
                onChange={(e) => setTextValue(e.target.value)}
            />
            <Button variant="contained" onClick={() => addTask()}>
                DONE
            </Button>
        </div>
    )
}
export default InputField
