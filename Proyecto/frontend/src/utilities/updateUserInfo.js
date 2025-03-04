import axios from 'axios';

export const updateUserInfo = async (user_id, name, email, phone_number) => {
  try {
    const response = await axios.patch(`https://api-backend-lostandfound-production.up.railway.app/user/${user_id}/profile/update`, { name, email, phone_number }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la información del usuario:', error);
    throw error;
  }
};

