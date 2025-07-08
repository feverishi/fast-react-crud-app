// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import all our components
import ProductForm from './components/ProductForm';
import ProductCard from './components/ProductCard';
import EditProductForm from './components/EditProductForm';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State for managing edit mode
  const [editingProductId, setEditingProductId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: '', description: '', price: '', inventory: '' });

  // --- All API and State handlers remain in App.js ---
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/products/');
        setProducts(response.data);
      } catch (error) {
        console.error("There was an error fetching the products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleProductCreated = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleProductDeleted = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditClick = (product) => {
    setEditingProductId(product.id);
    setEditFormData({ ...product });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const productId = editingProductId;
    const updatedProductData = {
      name: editFormData.name,
      description: editFormData.description,
      price: parseFloat(editFormData.price),
      inventory: parseInt(editFormData.inventory, 10),
    };

    try {
      const response = await axios.put(`http://localhost:8000/products/${productId}`, updatedProductData);
      setProducts(products.map(p => (p.id === productId ? response.data : p)));
      setEditingProductId(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  
  // --- The render logic is now much cleaner ---
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Catalog</h1>
      </header>
      
      <ProductForm onProductCreated={handleProductCreated} />

      <div className="product-list">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          products.map(product => (
            <div key={product.id} className="product-card">
              {editingProductId === product.id ? (
                <EditProductForm 
                  productData={editFormData}
                  onFormChange={handleEditFormChange}
                  onUpdate={handleUpdateSubmit}
                  onCancel={handleCancelEdit}
                />
              ) : (
                <ProductCard 
                  product={product}
                  onEdit={handleEditClick}
                  onDelete={handleProductDeleted}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;