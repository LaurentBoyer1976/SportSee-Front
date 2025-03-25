import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './src/js/layouts/layout.jsx';
import Profile from './src/js/pages/profile.jsx'; // Import ajouté
//import Error from './src/js/pages/Error.jsx';
//import './src/Css/App.css';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Profile userId={12} />} /> {/* Ajout d'un userId par défaut */}
     
      </Route> 
    </Routes>
  </Router>
);

export default AppRouter;

