import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    // This checks for the value you set in Login.tsx
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    // If true, render the child (Dashboard). If false, send to Login.
    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;