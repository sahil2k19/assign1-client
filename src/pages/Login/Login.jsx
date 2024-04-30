import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        axios.post(`${apiUrl}user/login`, user)
            .then((res) => {
                // Display login message based on response

                // Check if login was successful (token exists in response)
                if (res.data.token) {
                    // Store token in local storage
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.user));

                    // Redirect to the home page
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error('Login Error:', error);
                alert('Login failed. Please try again.');
            });
    };

    return (
        <div className="login-container">
        <div className='login'>
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter your Email' />
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='Password' />
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
        </div>
    );
};

export default Login;