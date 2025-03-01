import './RespondForms.scss';
import BasicLayout from '../../templates/layout/BasicLayout';
import RespondFormFields from '../../organisms/respondFormFields/RespondFormFields';
import { useState, useEffect } from 'react';
import MainButton from '../../atoms/mainButton/MainButton';
import { useUserStore } from '../../store/userStore';
import { createReport , updateReport } from '../../utilities/reports';
import dayjs from 'dayjs';
import { useFormLogic } from '../../hooks/useFormLogic';
import { data, useParams } from 'react-router-dom';
import { getFilteredObjects } from '../../utilities/getObjectId';
import { categoryOptions, locationOptions } from '../../utilities/options';

const RespondForms = () => {
  const { id } = useParams();
  const { userId } = useUserStore();

  const [values, setValues] = useState({
    title: '',
    category_id: '',
    location_id: "",
    description: '',
    status: '',
    date_lost_or_found: dayjs().format('YYYY-MM-DD'),
    contact_method: '',
    image: null,  });


  const { handleChangeOptions, resetForm } = useFormLogic(setValues);

  useEffect(() => {
    if (userId && id) {
      getFilteredObjects(userId, id)
        .then(data => {
          if (data) {
            // Encontrar IDs basados en los nombres recibidos
            console.log('Data:', data);
            const category = categoryOptions.find(opt => opt.label === data.category);
            const location = locationOptions.find(opt => opt.label === data.location);

            setValues({
              title: data.title || '',
              category_id: category ? category.value : '', // Usar el value del option
              location_id: location ? location.value : '',
              description: data.description || '',
              status: data.status || '',
              date_lost_or_found: data.date_lost_or_found
                ? dayjs(data.date_lost_or_found).format('YYYY-MM-DD')
                : dayjs().format('YYYY-MM-DD'),
              contact_method: data.contact_method || '',
            });
          }
        })
    }
    if(!id){
      resetForm();
    }
    
  }, [userId, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let reportData;
      if (id) {
        reportData = await updateReport(userId, id, {
          title: values.title,
          category_id: values.category_id,
          location_id: values.location_id,
          description: values.description,
          status: values.status,
          date_lost_or_found: values.date_lost_or_found,
          contact_method:  values.contact_method,
        }); // Si hay un ID, actualiza el reporte
      } else {
        reportData = await createReport(userId, values); // Si no hay ID, crea un nuevo reporte
      }
      console.log(id ? 'Reporte actualizado:' : 'Reporte creado:', reportData);
      resetForm();
    } catch (error) {
      console.error('Error al procesar el reporte:', error);
    }
  };

  return (
    <BasicLayout>
      <h1 className='report-form__title'>
        {id ? 'Actualizar Reporte' : 'Reportar Objeto'}
      </h1>
      <form onSubmit={handleSubmit} className="report-form">
        <RespondFormFields values={values} handleChangeOptions={handleChangeOptions} />
        <MainButton text={id ? 'Actualizar reporte' : 'Crear reporte'} type='submit' className='report-form__button' />
      </form>
    </BasicLayout>
  );
};

export default RespondForms;