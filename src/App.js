import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from './pages/index-page';
import SingleGifPage from './pages/single-gif-page';

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
       <Route path='/gif' element={<IndexPage />} /> 
       <Route path='/gif/:id' element={<SingleGifPage />} /> 
      </Routes>
      </BrowserRouter>
  );
}

export default App;
