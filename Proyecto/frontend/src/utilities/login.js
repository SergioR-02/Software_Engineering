import axios from "axios";

const Login = async (email, password) => {
  return axios.post(
    'http://localhost:3000/auth/login',
    {
      email: email,
      password: password,
    }
  );
}


export { Login };