import axios from "axios";

const getUser = async () => {
  const response = await axios.get('http://localhost:3000/user/profile', {
    withCredentials: true,
  });
  return response.data;
};

export { getUser };
