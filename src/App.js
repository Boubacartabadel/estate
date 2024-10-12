import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import Home from './Home'
import Login from './Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            
            <Route path='/' element={<Login />} ></Route>
            <Route path='/signup' element={<Signup />} ></Route>
            <Route path='/home' element={<Home />} ></Route>

        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
