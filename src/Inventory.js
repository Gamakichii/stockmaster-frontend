import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Inventory({ userId }) {
    const [inventory, setInventory] = useState([]);
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        axios.get(`http://47.130.46.103/inventory.php?userId=${userId}`)
            .then(response => setInventory(response.data))
            .catch(error => console.error('Error fetching inventory:', error));
    }, [userId]);

    const addItem = async () => {
         await axios.post('http://47.130.46.103/inventory.php', {userId: userId, itemName : itemName, quantity: quantity});
         axios.get(`http://47.130.46.103/inventory.php?userId=${userId}`).then(response => setInventory(response.data));
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">StockMaster Inventory</h2>
            <ul className="mb-4">
                {inventory.map(item => (
                    <li key={item.id} className="border-b py-2">{item.item_name} - {item.quantity}</li>
                ))}
            </ul>
            <input type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} className="w-full p-2 mb-2 border rounded" />
            <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full p-2 mb-2 border rounded" />
            <button onClick={addItem} className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">Add Item</button>
        </div>
    );
}

export default Inventory;