import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './pages/Layout';
import Home from './pages/Home';
import User from './pages/User';
import Goods from './pages/Goods';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="goods" element={<Goods />} />
      </Route>
    </Routes>
  );
}

export default App;