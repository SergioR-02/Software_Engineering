import axios from "axios";

const getUser = async () => {
  const response = await axios.get('https://api-backend-lostandfound-production.up.railway.app/user/profile', {
    withCredentials: true,
  });
  return response.data;
};

export { getUser };
