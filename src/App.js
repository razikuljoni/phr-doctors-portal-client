import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './assets/components/Navbar/Navbar';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
