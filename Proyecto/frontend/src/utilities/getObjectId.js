import axios from 'axios';

export const getFilteredObjects = async (userId, filterId) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/objects/filter/${filterId}`, {
      withCredentials: true, 
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener los objetos filtrados:', error);
    throw error;
  }
};