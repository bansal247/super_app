import './App.css';
import Browse from './pages/Browse';
import GenrePage from './pages/GenrePage';
import Home from './pages/HomePage';
import Register from './pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Register/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/genre' element={<GenrePage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/browse' element={<Browse/>} />
      </Routes>
    </>
  );
}

export default App;
