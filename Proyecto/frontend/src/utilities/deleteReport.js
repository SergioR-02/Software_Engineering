import axios from 'axios';

export const deleteReport = async (userId, reportId) => {
  console.log(userId, reportId);
  try {
    const response = await axios.delete(`https://api-backend-lostandfound-production.up.railway.app/user/${userId}/reports/${reportId}`, {
      withCredentials: true,
    })
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el reporte:', error);
    throw error;
  }
};

