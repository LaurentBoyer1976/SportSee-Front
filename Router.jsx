import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './src/js/layouts/layout.jsx';
import Error from './src/js/pages/Error.jsx';
import './src/Css/App.css';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='accommodations/:id' element={<Accommodations />} />
        <Route path='404' element={<Error />} />
        <Route path='*' element={<Error />} />
      </Route> 
    </Routes>
  </Router>
);

export default AppRouter;

