import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import './Header.scss'
import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

const Header = ({ cartData }: Props) => {
    const appBar = false
    return (
        <AppBar
            position="static"
            className="app-bar"
            style={{ backgroundColor: appBar ? 'green' : 'purple' }}
        >
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Menu />
                    <CartHeader cartData={cartData} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
