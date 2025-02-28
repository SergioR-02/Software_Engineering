import axios from 'axios';

export const createReport = async (userId, values) => {
  try {
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      if (values[key]) {
        formData.append(key, values[key]);
      }
    });

    const response = await axios.post(`http://localhost:3000/user/${userId}/reports`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error('Error al crear el reporte:', error);
    throw error;
  }
};


export const updateReport = async (userId, reportId, data) => {
  console.log('data:', data);
  try {
    const response = await axios.patch(
      `http://localhost:3000/user/${userId}/reports/${reportId}`,
      {
        ...data,
      },{
        withCredentials: true,
      });

    return response.data;
  } catch (error) {
    console.error('Error al actualizar el reporte:', error);
    throw error;
  }
};
