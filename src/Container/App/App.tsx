import Header from 'Container/Header/Header'
import Main from 'Container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
// import Logo from 'components/Logo/Logo'
const App = () => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Main />
            </StyledEngineProvider>
        </>
    )
}
export default App
