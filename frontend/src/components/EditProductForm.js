// frontend/src/components/EditProductForm.js

import React from 'react';

function EditProductForm({ productData, onFormChange, onUpdate, onCancel }) {
  return (
    <form onSubmit={onUpdate} className="edit-form">
      <input type="text" name="name" value={productData.name} onChange={onFormChange} required />
      <input type="text" name="description" value={productData.description} onChange={onFormChange} />
      <input type="number" name="price" value={productData.price} onChange={onFormChange} required step="0.01" />
      <input type="number" name="inventory" value={productData.inventory} onChange={onFormChange} required step="1" />
      <div className="edit-form-actions">
        <button type="submit" className="save-btn">Save</button>
        <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>
      </div>
    </form>
  );
}

export default EditProductForm;