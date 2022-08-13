import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {goToLogin, goToListRecipes} from '../../routes/coordinator';
import {useNavigate}from 'react-router-dom';

const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if(token) {
            logout()
            setRightButtonText("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }

    return (
        <AppBar position="static">
            <Toolbar>
                {/* <MenuIcon /> */}
                <Typography variant="h4" cursor='pointer' onClick={() => goToListRecipes(navigate)} sx={{ flexGrow: 1 }}>Cookenu</Typography>
                <Button onClick={() => {rightButtonAction()}} color="inherit">{rightButtonText}</Button>
            </Toolbar>
        </AppBar>

    );
}

export default Header
