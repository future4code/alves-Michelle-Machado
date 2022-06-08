import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aprenda React com a Labenu</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.labenu.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site da Labenu
        </a>
      </header>
    </div>
  );
}

export default App;
