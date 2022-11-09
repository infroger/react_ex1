import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './assets/scss/main.scss';
import './App.css';
import Button from './components/Button';
import Menu from './components/Menu';
import {ThemeProvider} from 'styled-components';
import {light, dark} from './Theme';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Departamentos from './pages/Departamentos';
import FormDepartamento from './pages/FormDepartamento';
import DetalhaDepartamento from './pages/DetalhaDepartamento';

function App() {

  const [count, setCount] = useState(10);

  useEffect( () => {
    console.log('State mudou...', count);
  }, [count])


  return (
    <>
    <ThemeProvider theme={dark}>
        <BrowserRouter>
          <Menu/>
          <section>
          <Routes>
            { /* <Route path='/' element={<h1>Home</h1>} /> */ }
            <Route path='/' >
              <Route index element={<Home/>} />

              <Route path='/departamentos'>
                <Route index element={<Departamentos/>} />
                <Route path='new' element={<FormDepartamento />} />
                <Route path=':idDepartamento' element={<DetalhaDepartamento />} />
              </Route>

            </Route>

            <Route path='*' element={<h1>Not found</h1>} />

          </Routes>
          </section>
          </BrowserRouter>
        </ThemeProvider>
    </>
  );
}

export default App;
