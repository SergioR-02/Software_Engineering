import axios from 'axios';

export const getFilteredObjects = async (userId, keyword, location, startDate, endDate) => {
  try {
    const response = await axios.get(`https://api-backend-lostandfound-production.up.railway.app/user/${userId}/objects/filters`, {
      withCredentials: true,
      params: {
        keyword: keyword,
        location: location,
        startDate: startDate,
        endDate: endDate
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener los objetos filtrados:', error);
    throw error;
  }
};