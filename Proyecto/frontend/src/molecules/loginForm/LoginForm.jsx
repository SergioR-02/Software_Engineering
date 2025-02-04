/* eslint-disable react/prop-types */
import { useState } from 'react'
import MainButton from '../../atoms/mainButton/MainButton'
import InputField from '../../atoms/inputField/InputField'
import './LoginForm.scss'

const LoginForm = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit(name, password)
      }}
      className='login-form'
    >
      <h1 className='login-form__title'>Login</h1>
      <div className='login-form__fields'>
        <InputField
          label='CORREO'
          type='email'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <InputField
          label='PASSWORD'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <MainButton
        text='Iniciar Sesión'
        type='submit'
        onClick={() => {}}
        className='login-form__button'
      />
    </form>
  )
}

export default LoginForm
