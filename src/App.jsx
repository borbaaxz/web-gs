import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate,useLocation } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import Section1 from './Section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './Section4';
import AuthenticatedWrapper from './AuthenticatedWrapper';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AuthenticatedWrapper><Home /></AuthenticatedWrapper>} />
        <Route path="/Home" element={<AuthenticatedWrapper><Home /></AuthenticatedWrapper>} />
        <Route path="/section1" element={<AuthenticatedWrapper><Section1 /></AuthenticatedWrapper>} />
        <Route path="/section2" element={<AuthenticatedWrapper><Section2 /></AuthenticatedWrapper>} />
        <Route path="/section3" element={<AuthenticatedWrapper><Section3 /></AuthenticatedWrapper>} />
        <Route path="/section4" element={<AuthenticatedWrapper><Section4 /></AuthenticatedWrapper>} />
      </Routes>
    </Router>
  );
}

export default App;
