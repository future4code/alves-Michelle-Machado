import  Router  from './routes/Router';
import './App.css';
import theme from './constants/theme';
import {ThemeProvider} from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router />
    </ThemeProvider>
  );
}

export default App;
