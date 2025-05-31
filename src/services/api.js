import axios from 'axios';

const API_BASE_URL = 'https://cart-api.alexrodriguez.workers.dev';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-throw the error so the component can handle it
  }
};

export const getDetails = async (id) => {
    try {
        const response = await api.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching details:', error);
        throw error;
    }
}