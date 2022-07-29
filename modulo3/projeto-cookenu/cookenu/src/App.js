import React, {useState } from "react"
import Router from './routes/Router';
import './App.css';
import theme from './constants/theme';
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
