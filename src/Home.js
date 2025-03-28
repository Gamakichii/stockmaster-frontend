import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-bold mb-4">Welcome to StockMaster!</h1>
            <Link to="/inventory" className="text-blue-500 block mb-2">View Inventory</Link>
            <Link to="/" className="text-blue-500 block">Logout</Link>
        </div>
    );
}

export default Home;