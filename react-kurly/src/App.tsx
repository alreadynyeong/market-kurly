import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GoogleForm from './pages/googleForm';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/googleform' element={<GoogleForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
