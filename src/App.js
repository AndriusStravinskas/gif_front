import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from './pages/index-page';
import SingleGifPage from './pages/single-gif-page';
import RegisterPage from './pages/register-page';
import LoginPage from './pages/login-page';
import React from 'react';

const App = () => {
  const [userLogin, setUserLogin] = React.useState(false)

  return (
      <BrowserRouter>
      <Routes>
       <Route path='/gif' element={<IndexPage />} /> 
       <Route path='/gif/:id' element={<SingleGifPage setUserLogin={setUserLogin} userLogin={userLogin} />} /> 
       <Route path='/register' element={<RegisterPage />} />
       <Route path='/login' element={<LoginPage />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
