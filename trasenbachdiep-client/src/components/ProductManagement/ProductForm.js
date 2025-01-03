import React, { useState } from 'react';
import { createProduct, updateProduct, uploadImage } from '../services/api';
import './ProductManagement.css';

const ProductForm = ({ product, onClose }) => {
  const [formData, setFormData] = useState(
    product || {
      name: '',
      description: '',
      productImage: '',
      productItems: [{ sku: '', price: '', productImage: '' }],
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const items = [...formData.productItems];
    items[index][name] = value;
    setFormData((prev) => ({ ...prev, productItems: items }));
  };

  const handleImageUpload = async (index, file) => {
    try {
      const imagePath = await uploadImage(file); // Upload file và lấy đường dẫn trả về
      console.log('Image path from API:', imagePath); // Debug đường dẫn trả về
      const items = [...formData.productItems];
      items[index].productImage = imagePath; // Lưu đường dẫn vào productImage của item
      setFormData((prev) => ({ ...prev, productItems: items }));
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const addProductItem = () => {
    setFormData((prev) => ({
      ...prev,
      productItems: [...prev.productItems, { sku: '', price: '', productImage: '' }],
    }));
  };

  const removeProductItem = (index) => {
    setFormData((prev) => ({
      ...prev,
      productItems: prev.productItems.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    try {
      if (product) {
        await updateProduct(product.id, formData);
      } else {
        await createProduct(formData);
      }
      onClose();
    } catch (error) {
      console.error('Error submitting product:', error);
    }
  };

  return (
    <div className="form-add-product">
      <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="productImage"
        placeholder="Product Image URL"
        value={formData.productImage}
        onChange={handleInputChange}
      />

      <h3>Product Items</h3>
        {formData.productItems.map((item, index) => (
            <div key={index} className="product-item-group">
            <input
                type="text"
                name="sku"
                placeholder="SKU"
                value={item.sku}
                onChange={(e) => handleItemChange(index, e)}
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleItemChange(index, e)}
            />
            <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(index, e.target.files[0])}
            />
            {item.productImage && (
            <img
                src={`/${item.productImage}`}
                alt="Product Item"
                width="50"
                style={{ marginLeft: '10px' }}
            />
            )}
            <button onClick={() => removeProductItem(index)}>Remove</button>
            </div>
        ))}
        <button onClick={addProductItem}>Add Product Item</button>
        <div className='form-button'>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
        </div>
    </div>
  );
};

export default ProductForm;