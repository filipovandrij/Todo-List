import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
import {
    Box,
    FormControl,
    InputLabel,
    Button,
    TextField,
    MenuItem,
    Select,
} from '@mui/material'
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
        <Box
            sx={{ maxWidth: 1200, margin: '20px auto' }}
            className="create_form"
        >
            <FormControl fullWidth sx={{ display: 'flex' }}>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    value={important}
                    label="Priority"
                    onChange={(e) => setImportant(e.target.value)}
                >
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
            </FormControl>
        </Box>
    )
}
export default InputField
