import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './assets/scss/main.scss';
import './App.css';
import Button from './components/Button';
import Menu from './components/Menu';

function App() {

  const [count, setCount] = useState(10);

  useEffect( () => {
    console.log('State mudou...', count);
  }, [count])

  return (
    <>
      <Menu/>
      <br/>
      <Button onClick={ () => {setCount(count+1);
      }} variant="success">
        Soma
      </Button>
      <Button onClick={ () => {setCount(count-1);
      }} variant="warning">
        Subtrai
      </Button>
      <br/>
      Count: {count}
    </>
  );
}

export default App;
