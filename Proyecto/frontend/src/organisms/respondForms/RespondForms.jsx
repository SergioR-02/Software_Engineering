import './RespondForms.scss';
import BasicLayout from '../../templates/layout/BasicLayout';
import RespondFormFields from '../../organisms/respondFormFields/RespondFormFields';
import { useState, useRef } from 'react';
import MainButton from '../../atoms/mainButton/MainButton';
import { useUserStore } from '../../store/userStore';
import { createReport } from '../../utilities/createReport';
import dayjs from 'dayjs';
import { useFormLogic } from '../../hooks/useFormLogic';

const RespondForms = () => {
  const { userId } = useUserStore();

  const [values, setValues] = useState({
    title: '',
    category_id: '',
    location_id: '',
    description: '',
    status: '',
    date_lost_or_found: dayjs().format('YYYY-MM-DD'),
    contact_method: '',
    image: null,
  });

  const { handleChangeOptions, resetForm } = useFormLogic(setValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reportData = await createReport(userId, values);
      console.log('Reporte creado:', reportData);
      resetForm();
    } catch (error) {
      console.error('Error al crear el reporte:', error);
    }
  };

  return (
    <BasicLayout>
      <h1 className='report-form__title'>Reportar Objeto</h1>
      <form onSubmit={handleSubmit} className="report-form">
        <RespondFormFields values={values} handleChangeOptions={handleChangeOptions} />
        <MainButton text='Crear reporte' type='submit' className='report-form__button' />
      </form>
    </BasicLayout>
  );
  
}

export default RespondForms;
