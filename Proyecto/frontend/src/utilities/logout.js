import axios from "axios";

const Logout = async () => {
  try {
    const response = await axios.post(
      'https://api-backend-lostandfound-production.up.railway.app/auth/logout',
      {},
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    console.error('Error en logout:', error);
    throw error;
  }
};

export default Logout;
