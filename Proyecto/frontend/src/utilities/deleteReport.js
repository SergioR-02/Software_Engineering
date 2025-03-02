import axios from 'axios';

export const deleteReport = async (userId, reportId) => {
  console.log(userId, reportId);
  try {
    const response = await axios.delete(`http://localhost:3000/user/${userId}/reports/${reportId}`, {
      withCredentials: true,
    })
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el reporte:', error);
    throw error;
  }
};

