import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage'; // Assuming you have this component
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0' }}>
                    <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/" element={<LoginPage />} /> {/* Redirect to login by default */}
                </Routes>
            </div>
        </Router>
    );
};


const handleLogin = (email, password) => {
    // Example login logic
    console.log('Logging in with:', email, password);
    // Here, you'd typically make an API call to your backend to authenticate the user
    // and then do something like setting the user's authentication state in your app
};

const handleRegister = (username, email, password) => {
    // Example registration logic
    console.log('Registering with:', username, email, password);
    // Similar to handleLogin, you'd make an API call for registration here
};
export default App;
