import * as React from 'react';
// import * as C from './styled'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {goToLogin, goToListRecipes} from '../../routes/coordinator';
import {useNavigate}from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()
    return (
        <AppBar position="static">
            <Toolbar>
                {/* <MenuIcon /> */}
                <Typography variant="h4" cursor='pointer' onClick={() => goToListRecipes(navigate)} sx={{ flexGrow: 1 }}>Cookenu</Typography>
                <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

    );
}

export default Header
