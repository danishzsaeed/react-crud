import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import User from './components/User';
import EditUser from './components/EditUser';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/view/:id" element={<User />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
