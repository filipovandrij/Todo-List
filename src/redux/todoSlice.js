import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                important: action.payload.important,
                completed: false,
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            )
        },
        toggleTodo(state, action) {
            const toggledTodoComplete = state.todos.find(
                (todo) => todo.id === action.payload.id
            )
            toggledTodoComplete.completed = !toggledTodoComplete.completed
        },
    },
})

export const { removeTodo, addTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer
