import './Login.scss'
import { useState } from 'react'
import LoginForm from '../../molecules/loginForm/LoginForm'

const Login = () => {
  const [error] = useState(null)

  const handleLogin = (name, password) => {
    console.log(name, password)
  }

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
