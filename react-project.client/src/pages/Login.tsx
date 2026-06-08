import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Set the authentication flag
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
    };

    return (
        <div className="container">
            <div className="tab-header">
                <button
                    className={activeTab === 'login' ? 'active' : ''}
                    onClick={() => setActiveTab('login')}
                >
                    Login
                </button>
                <button
                    className={activeTab === 'register' ? 'active' : ''}
                    onClick={() => setActiveTab('register')}
                >
                    Register
                </button>
            </div>

            {activeTab === 'login' ? (
                <form onSubmit={handleLogin} className="form">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" className="submit-btn">Login</button>
                </form>
            ) : (
                <form className="form">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" className="submit-btn">Register</button>
                </form>
            )}
        </div>
    );
};
export default Login;