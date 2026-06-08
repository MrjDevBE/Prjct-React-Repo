import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './PrivateRoute'; // Ensure this file exists in your src folder

function App() {
    return (
        <Router>
            <Routes>
                {/* 1. Public route: Login */}
                <Route path="/" element={<Login />} />

                {/* 2. Protected route: This blocks access unless authenticated */}
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                {/* 3. Redirect any unknown routes back to Login */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;