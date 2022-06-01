import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import About from '../Pages/About';
import ErrorPage from '../Pages/ErrorPage';


const Routing = () => {
  return (
    <Router>
      <nav>
        <Link className="Home" to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='profile'>Profile</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;