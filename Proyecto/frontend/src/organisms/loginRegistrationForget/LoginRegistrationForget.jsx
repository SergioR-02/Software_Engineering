import './LoginRegistrationForget.scss'
import { useState } from 'react'
import LoginForm from '../../molecules/loginForm/LoginForm'
import { Login } from '../../utilities/login'
import { useNavigate } from 'react-router-dom';

const LoginRegistrationForget = () => {
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const handleSessionClick = () => {
      navigate("/register");
  };

  const handleLogin = (email, password) => {
    Login(email, password)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          setError(null)

        }else {
          setError('Credenciales Incorrectas')
        }
      })
      .catch(error => {
        console.log(error)
        setError('Credenciales Incorrectas')
      })
  }

  return (
    <div className='login__form-container'>
      <LoginForm onSubmit={handleLogin} error={error} />
      <a href='#' className='login__forgot-password'>
        ¿Olvidaste tu contraseña?
      </a>
      <button className='login__register' onClick={() => console.log(handleSessionClick())}>
        Registrate
      </button>
    </div>
  )
}

export default LoginRegistrationForget
