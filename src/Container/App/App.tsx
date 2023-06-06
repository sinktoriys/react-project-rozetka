import Header from 'Container/Header/Header'
import Main from 'Container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = () => {
    const [cartData, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={cartData} />
                <Main />
            </StyledEngineProvider>
        </>
    )
}
export default App
