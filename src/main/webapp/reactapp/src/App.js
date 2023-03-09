import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Components/Main';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Test from './Components/Test';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/test" element={<Test />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;