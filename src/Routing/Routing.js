import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Guide from '../Pages/Guide';
import ErrorPage from '../Pages/ErrorPage';


const Routing = () => {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='guide'>Guide</Link>
        <Link to='profile'>Profile</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='/guide' element={<Guide />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;