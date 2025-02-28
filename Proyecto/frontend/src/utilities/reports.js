import axios from 'axios';
import { categoryOptions, locationOptions } from './options';

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

const prepareUpdateReportPayload = (data) => {
  const payload = { ...data };

  // Si category_id contiene el nombre de la categoría, lo mapeamos al id correcto
  if (payload.category_id ) {
    const foundCategory = categoryOptions.find(option => option.label === payload.category_id);
    if (foundCategory) {
      payload.category_id = foundCategory.value;
    } else {
      payload.category_id = "1";
    }
  }

  if (payload.location_id) {
    const foundLocation = locationOptions.find(option => option.label === payload.location_id);
    if (foundLocation) {
      payload.location_id = foundLocation.value;
    }else {
      payload.category_id = "1";
    }
  }

  // Si necesitas hacer un mapeo similar para location, puedes hacerlo aquí

  return payload;
};

export const updateReport = async (userId, reportId, data) => {
  try {
    // Preparamos el payload sin la propiedad "image"
    const payload = prepareUpdateReportPayload(data);
    console.log('Payload:', payload);
    const response = await axios.patch(
      `http://localhost:3000/user/${userId}/reports/${reportId}`,
      payload,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error al actualizar el reporte:', error);
    throw error;
  }
};


export const getLabelById = (options, id) => {
  const found = options.find(option => option.value === String(id));
  return found ? found.label : '';
};
