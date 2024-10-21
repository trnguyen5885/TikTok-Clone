import axios from 'axios';

export async function getData(type) {
  try {
    const BASE_URL = 'http://localhost:3000/';
    const response = await axios.get(BASE_URL + type);
    return response.data;
  } catch (error) {
    throw error;
  }
}
