import './App.css';
import GenrePage from './pages/GenrePage';
import Register from './pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/genre' element={<GenrePage/>} />
      </Routes>
    </>
  );
}

export default App;
