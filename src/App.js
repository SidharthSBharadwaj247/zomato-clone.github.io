import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import { Routes, Route } from 'react-router-dom';
import Emaillogin from './components/Emaillogin';
import Main from './components/Main';
import Details from './components/Details';
 function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/emailLogin' element={<Emaillogin />} />
        <Route path='/main' element={<Main/>}></Route>
        <Route path='/details' element={<Details />} />
      </Routes>
      {/* <Welcome></Welcome> */}
    </>
  );
}
export default App;