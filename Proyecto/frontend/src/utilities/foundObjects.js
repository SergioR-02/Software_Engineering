import axios from 'axios';

// Si necesitas un método para obtener todos los objetos:
export const getObjects = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${ userId }/objects`, {
      withCredentials: true,
    });
    return response.data; 
  } catch (error) {
    console.error("Error al obtener objetos:", error);
    throw error;
  }
};

