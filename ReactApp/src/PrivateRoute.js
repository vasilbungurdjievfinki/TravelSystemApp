import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = () => {
     const isAuthenticated=true;
     console.log(isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
