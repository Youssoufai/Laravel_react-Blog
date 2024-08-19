import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
export default function App() {
  const { user } = useContext(AppContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Register />} />
          <Route path='/register' element={user ? <Home /> : <Register />} />
          <Route path='/login' element={user ? <Home /> : <Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


