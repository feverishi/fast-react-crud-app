// frontend/src/components/ProductForm.js

import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ onProductCreated }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [inventory, setInventory] = useState('');

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior (which reloads the page)
    e.preventDefault();

    const newProduct = {
      name: name,
      description: description,
      // The API expects numbers, so we parse them from the string inputs
      price: parseFloat(price),
      inventory: parseInt(inventory, 10),
    };

    try {
      const response = await axios.post('http://localhost:8000/products/', newProduct);
      // Call the parent's callback function with the new product data from the API
      onProductCreated(response.data);
      
      // Clear the form fields for the next entry
      setName('');
      setDescription('');
      setPrice('');
      setInventory('');
    } catch (error) {
      console.error("Error creating product:", error);
      // Here you could add user-facing error handling, e.g., a state for an error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h3>Add a New Product</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Description"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
        step="0.01"
      />
      <input
        type="number"
        value={inventory}
        onChange={(e) => setInventory(e.target.value)}
        placeholder="Inventory"
        required
        step="1"
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;