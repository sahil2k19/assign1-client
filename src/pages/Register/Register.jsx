import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const register = () => {
        const { name, email, password, reEnterPassword } = user;
    
        // Basic input validation
        if (!name || !email || !password || !reEnterPassword) {
            alert("Please fill in all fields.");
            return;
        }
    
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        // Validate password length and match
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        if (password !== reEnterPassword) {
            alert("Passwords do not match.");
            return;
        }
    
        // Send registration request
        axios.post(`${apiUrl}user/register`, user)
            .then((res) => {
                console.log(res.data); // Log response data
                alert("Registered Successfully");
            })
            .catch((error) => {
                console.log("Registration error:", error);
                alert("Registration failed. Please try again.");
            });
    };
    

    return (
        <div className="register-container">
        <div className='register'>
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder='Enter name' />
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter Email' />
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='Password' />
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder='ReEnter Password' />
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={()=> navigate("/login")}>Login</div>
        </div>
        </div>
    );
};

export default Register;
