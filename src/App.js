import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from './pages/index-page';
import SingleGifPage from './pages/single-gif-page';
import RegisterPage from './pages/register-page';
import LoginPage from './pages/login-page';
import React from 'react';

const App = () => {
  const [getEmail, setEmail] = React.useState('')
  const userHasSecret = localStorage.getItem('userSecret')
  
  return (
      <BrowserRouter>
      {userHasSecret && <h1 className='w-400 m-0'>{getEmail}</h1>}
      <Routes>
       <Route path='/gif' element={<IndexPage userHasSecret={userHasSecret} setEmail={setEmail} getEmail={getEmail} />} /> 
       <Route path='/gif/:id' element={<SingleGifPage  />} /> 
       <Route path='/register' element={<RegisterPage />} />
       <Route path='/login' element={<LoginPage setEmail={setEmail} />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
