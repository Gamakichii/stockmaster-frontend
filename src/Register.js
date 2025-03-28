import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://47.130.46.103/register.php', { username, password });
            if (response.data.success) {
                alert('Registration successful!');
                navigate('/');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 mb-4 border rounded" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register</button>
            <br />
            <Link to="/" className="text-blue-500 mt-2 block">Login</Link>
        </form>
    );
}

export default Register;