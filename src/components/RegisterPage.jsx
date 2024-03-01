import React, { useState } from 'react';
import styles from './RegisterPage.module.css';


const RegisterPage = () => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setFormErrors({});

        // Check if passwords match
        if (userDetails.password !== userDetails.confirmPassword) {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                confirmPassword: "Passwords do not match."
            }));
            return; // Stop the form submission
        }

        try {
            // Replace 'http://localhost:3000/api/auth/register' with your actual backend endpoint
            const { data } = await axios.post('http://localhost:3000/api/auth/register', {
                username: userDetails.username,
                email: userDetails.email,
                password: userDetails.password, // Assuming you only need to send one password field
            });
            console.log('Registration successful', data);

            // Redirect to login page or anywhere you prefer after successful registration
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error);
            // Handle registration errors here, such as displaying a message to the user
            setFormErrors(prevErrors => ({
                ...prevErrors,
                apiError: error.response ? error.response.data.message : "Registration failed. Please try again later."
            }));
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    return (
        <div className={styles['register-container']}>
            <form onSubmit={handleSubmit} className={styles['register-form']}>
                <h2>Create an Account</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userDetails.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userDetails.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={userDetails.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
