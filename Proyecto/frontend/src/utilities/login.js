import axios from "axios";



const getUser = async () => {
  const response = await axios.get('http://localhost:3000/user/profile', {
    withCredentials: true,
  });
  console.log(response.data);
  return response.data;
};

export { getUser };
const Login = async (email, password) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/auth/login',
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
    
    // Si el login es exitoso, configuramos el refresh automático
    if (response.status === 200) {
      setupTokenRefresh();
      getUser();
    }
    return response;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

const refreshToken = async () => {
  try {
    const response = await axios.post(
      'http://localhost:3000/auth/refresh-token',
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};

let refreshInterval;

const setupTokenRefresh = (intervalMs = 295000) => { // 295 segundos por defecto
  console.log('Configurando refresco de token');
  // Limpiar el intervalo anterior si existe
  if (refreshInterval) {
    clearInterval(refreshInterval);
  }

  // Crear un nuevo intervalo
  refreshInterval = setInterval(async () => {
    try {
      await refreshToken();
      console.log('Token refrescado exitosamente');
    } catch (error) {
      console.error('Error en el refresh automático:', error);
      // Si hay un error, detener el intervalo
      clearInterval(refreshInterval);
      //TODO: Desloguear el usuario cuando el refresh token expire
      console.log("Usuario deslogueado")
    }
  }, intervalMs);

  // Retornar una función para limpiar el intervalo
  return () => {
    if (refreshInterval) {
      clearInterval(refreshInterval);
    }
  };
};

export { Login, refreshToken, setupTokenRefresh };