import axios from "axios";

const RegisterUser = async (name, email, password, phone_number) => {
  try {
    const response = await axios.post(
      'https://api-backend-lostandfound-production.up.railway.app/auth/register',
      {
        email,
        password,
        name,
        phone_number,
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('Error en registro:', error);
    throw error;
  }
};

export default RegisterUser;
