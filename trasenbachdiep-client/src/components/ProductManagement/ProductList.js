import React, { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../services/api';
import ProductForm from './ProductForm';
import './ProductManagement.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await fetchProducts();
      setProducts(data.content || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      loadProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormVisible(true);
  };

  const handleFormClose = () => {
    setSelectedProduct(null);
    setFormVisible(false);
    loadProducts();
  };

  return (
    <div>
      <h1>Product Management</h1>
      <button onClick={() => setFormVisible(true)}>Add Product</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                <img src={product.productImage} alt={product.name} width="50" />
              </td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {formVisible && (
        <ProductForm
          product={selectedProduct}
          onClose={handleFormClose}
        />
      )}
    </div>
  );
};

export default ProductList;