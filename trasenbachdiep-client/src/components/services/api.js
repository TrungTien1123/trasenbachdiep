import axios from 'axios';

const BASE_URL = 'http://localhost:8888/api/product'; // Thay bằng URL server của bạn

export const fetchProducts = () => axios.get(BASE_URL);

export const createProduct = (productData) =>
  axios.post(BASE_URL, productData);

export const updateProduct = (id, productData) =>
  axios.put(`${BASE_URL}/${id}`, productData);

export const deleteProduct = (id) =>
  axios.delete(`${BASE_URL}/${id}`);


export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
  
    const response = await axios.post('/api/files/image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  
    return response.data; // Trả về đường dẫn ảnh từ API
  };