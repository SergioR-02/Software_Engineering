import axios from "axios";

const Logout = async () => {
  try {
    const response = await axios.post(
      'http://localhost:3000/auth/logout',
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
