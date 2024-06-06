import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthenticatedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated')!== null;

  if (!isAuthenticated && location.pathname!== "/login") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthenticatedRoute;