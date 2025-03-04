import axios from 'axios';
import dayjs from 'dayjs';

export const getMiReports = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/reports`, {
      withCredentials: true,
    });
    
    const reportesTraducidos = response.data.map(({ title, status, date_lost_or_found, ...resto }) => ({
      titulo: title,
      estado: status,
      fecha: dayjs(date_lost_or_found).format('DD-MM-YYYY'),
      ...resto 
    }));

    return reportesTraducidos;
  } catch (error) {
    console.error('Error al obtener los reportes:', error);
    throw error;
  }
};
