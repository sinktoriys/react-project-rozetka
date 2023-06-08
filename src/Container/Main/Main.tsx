import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
type Props = {
    // addProductToCart: () => void
}
const Main = (props: Props) => {
    return (
        <Container
            sx={{
                padding: '40px 0',
            }}
        >
            <Home />
        </Container>
    )
}
export default Main
