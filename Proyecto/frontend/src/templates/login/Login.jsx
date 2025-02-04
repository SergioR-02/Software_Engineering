import './Login.scss'
import { useState } from 'react'
import LoginForm from '../../molecules/loginForm/LoginForm'

const Login = () => {
  const [error, setError] = useState(null);

  const handleLogin = (name, password) => {
    if (name !== "c@gmail.com" || password !== "123") {
      setError("Credenciales Incorrectas");
    } else {
      setError(null);
    }
  };

  return (
    <div className='login'>
      <div className='login__form-container'>
        <LoginForm onSubmit={handleLogin} error={error} />
        <a href="#" className='login__forgot-password'>¿Olvidaste tu contraseña?</a>
        <a href="#" className='login__register'>Registrate</a>
      </div>
    </div>
  )
}

export default Login
