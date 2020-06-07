//import React, {useState} from 'react';
import React from 'react';
import './App.css';

// JSX: Sintaxe de XML dentro do JavaScript
//import Header from './Header';
import Routes from './routes';

function App() {
  return(
    <Routes />
  );
}

export default App;
//<h1>{counter * 2}</h1>
/*
  const [counter, setCounter] = useState(0);// [valor do estado, função para atualizar o valor do estado]

  function handleButtonClick(){
    //counter++;
    //console.log(counter);
    setCounter(counter + 1);
  }
  //return React.createElement('h1',{
  //  children:  'Hello World!'
  //});
  return (
    <div>
      <Header title={`Contador: ${counter}`} />

      <h1>{counter}</h1>
      
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div> 
 */