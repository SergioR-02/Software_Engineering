import './ProfileInformation.scss';
import { useState } from 'react';
import MainButton from '../../atoms/mainButton/MainButton';

export default function ProfileInformation() {
  const [name, setName] = useState('Cristian Momochis de los momochis');
  const [email, setEmail] = useState('Cristian@gmail.com');
  const [studentNumber, setStudentNumber] = useState('666666666');
  const [canEdit, setCanEdit] = useState(true);

  return (
    <div className='profile-information'>
      <h2 className='profile-information__title'>Informacion del Perfil</h2>
      <p className='profile-information__description'>
        Actualiza tu información aqui
      </p>
      <form
        className='profile-information__form'
        onSubmit={(e) => {
          e.preventDefault();
          setCanEdit(!canEdit);
        }}
      >
        <div className='profile-information__fields'>
          <label className='profile-information__label'>NOMBRE COMPLETO</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='profile-information__input'
            disabled={canEdit}
          />
        </div>
        <div className='profile-information__fields'>
          <label className='profile-information__label'>
            CORREO ELECTRONICO
          </label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='profile-information__input'
            disabled={canEdit}
          />
        </div>
        <div className='profile-information__fields'>
          <label className='profile-information__label'>
            NUMERO DE ESTUDIANTE
          </label>
          <input
            type='number'
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            className='profile-information__input'
            disabled={canEdit}
          />
        </div>
        <MainButton
          className='profile-information__button'
          type='submit'
          text={canEdit ? 'Editar Perfil' : 'Actualizar Perfil'}
        />
      </form>
    </div>
  );
}
