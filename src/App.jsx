import './App.css'
import InputField from './components/InputField'
import TaskList from './components/TaskList'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
    return (
        <div className="App">
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <InputField />
                <TaskList />
            </StyledEngineProvider>
        </div>
    )
}

export default App
