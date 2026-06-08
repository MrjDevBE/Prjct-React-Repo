import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the authentication flag
        localStorage.removeItem('isAuthenticated');
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>My Album Dashboard</h1>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </header>

            <main className="dashboard-content">
                <div className="stats-card">
                    <h3>Total Albums</h3>
                    <p>0</p>
                </div>
                <section className="album-gallery">
                    <h2>Your Collection</h2>
                    <p>Start adding photos to see them here!</p>
                </section>
            </main>
        </div>
    );
};
export default Dashboard;