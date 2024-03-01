import React, { useState } from 'react';
import axios from 'axios';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to store login errors
    const navigate = useNavigate(); // Hook for navigating to other routes

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password,
            });

            // Assuming your backend returns a token upon successful authentication
            const { token } = response.data;

            // Store the token in localStorage or sessionStorage
            localStorage.setItem('token', token);

            // Redirect the user to the homepage or dashboard after successful login
            navigate('/'); // Adjust the target route as necessary
        } catch (err) {
            if (err.response && err.response.status === 401) {
                // Handle 401 Unauthorized response
                setError('Invalid email or password.');
            } else {
                // Handle other errors
                setError('Login failed. Please try again later.');
            }
            console.error('Login error:', err);
        }
    };

    return (
        <div className={styles['login-container']}>
            <form onSubmit={handleSubmit} className={styles['login-form']}>
                <h2>Login to Your Account</h2>
                {error && <p className={styles['login-error']}>{error}</p>}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit">Login</button>

                <p>
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
