import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Inventory from './Inventory';
import Register from './Register';
import './index.css';

function App() {
    const [userId, setUserId] = useState(null);

    const handleLogin = (id) => {
        setUserId(id);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={userId ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
                <Route path="/home" element={userId ? <Home /> : <Navigate to="/" />} />
                <Route path="/inventory" element={userId ? <Inventory userId={userId} /> : <Navigate to="/" />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;