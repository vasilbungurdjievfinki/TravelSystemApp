import React, { useState, useContext } from 'react';
import {useNavigate} from "react-router-dom";
function LoginPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const navigator=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send login request to Spring Boot backend
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    // Handle successful login
                    console.log('Login successful');
                    navigator("/");
                } else {
                    // Handle failed login
                    console.error('Login failed');
                }
            })
            .catch(error => console.error('Error during login:', error));
    };

    // Redirect if already authenticated


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields for username and password */}
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
