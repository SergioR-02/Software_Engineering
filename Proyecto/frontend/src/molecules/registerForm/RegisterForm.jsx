/* eslint-disable react/prop-types */
import './RegisterForm.scss'
import { useState } from 'react'
import MainButton from '../../atoms/mainButton/MainButton'
import InputField from '../../atoms/inputField/InputField'
import ErrorMessage from '../../atoms/errorMessage/ErrorMessage'

const RegisterForm = ({ onSubmit, error }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit(name, password)
      }}
      className='register-form'
    >
      <h1 className='register-form__title'>Crear nueva cuenta</h1>
      <div className='register-form__fields'>
        <InputField
          label='Nombre'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <InputField
          label='contraseña'
          type='password'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputField
          label='Correo'
          type='email'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <MainButton
        text='Crear cuenta'
        type='submit'
        onClick={() => {}}
        className='register-form__button'
      />
      <ErrorMessage message={error} className='register-form__errorMessage' />
    </form>
  )
}

export default RegisterForm
