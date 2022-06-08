
import './App.css';
import React from "react"
import Contador from './contador';
import Form from './Form';


class App extends React.Component {
  // Ao inves de fazer uma função denominada App, podemos fazer 
  // uma classe, cuja sintaxe é essa acima.

  render() {
    return (
      <div className='App'>
        {/* <Contador /> */}
        <Form />
      </div>
    );
  }
}

export default App;

// ES7+ React/Redux/React-Native snippets

