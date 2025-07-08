// frontend/src/components/ProductCard.js

import React from 'react';

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <>
      <h2>{product.name}</h2>
      <p>{product.description || 'No description available.'}</p>
      <p className="price">Price: ${product.price.toFixed(2)}</p>
      <p className="inventory">In Stock: {product.inventory}</p>
      <div className="product-card-actions">
        <button className="edit-btn" onClick={() => onEdit(product)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default ProductCard;