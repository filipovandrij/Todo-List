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

export const priorityColorList = {
    important: {
        name: 'important',
        title: 'IMPORTANT',
        color: 'error',
    },
    low: { name: 'low', title: 'LOW', color: 'primary' },
    medium: { name: 'medium', title: 'MEDIUM', color: 'success' },
}

export const InputField = () => {
    const [text, setTextValue] = useState('')
    const [important, setImportant] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodo({ text, important }))
        setTextValue('')
    }

    return (
        <Box sx={{ maxWidth: 1200, margin: '20px auto' }}>
            <h2>CREATE YOUR TASK</h2>
            <FormControl
                fullWidth
                sx={{ display: 'flex' }}
                className="create_form"
            >
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    value={important}
                    label="Priority"
                    onChange={(e) => setImportant(e.target.value)}
                >
                    <MenuItem value={priorityColorList.important.name}>
                        {priorityColorList.important.title}
                    </MenuItem>
                    <MenuItem value={priorityColorList.medium.name}>
                        {priorityColorList.medium.title}
                    </MenuItem>
                    <MenuItem value={priorityColorList.low.name}>
                        {priorityColorList.low.title}
                    </MenuItem>
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
