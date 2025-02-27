import './RespondForms.scss';
import BasicLayout from '../../templates/layout/BasicLayout';
import CalendarDate from '../../atoms/calendarDate/CalendarDate';
import { useState } from 'react';
import InputField from '../../atoms/inputField/InputField';
import MainButton from '../../atoms/mainButton/MainButton';
import RadioGroup from '../../atoms/radioGroup/RadioGroup';
import SelectField from '../../atoms/selectField/SelectField';
import TextArea from '../../atoms/textArea/TextArea';
import { useUserStore } from '../../store/userStore';


const categoryOptions = [
  { value: "1", label: "Electrónicos" },
  { value: "2", label: "Documentos" },
  { value: "3", label: "Accesorios" },
  { value: "4", label: "Otros" },
]

const RespondForms = () => {
  const { userName, userId } = useUserStore();

  console.log(userName, userId);
  const [values, setValues] = useState({
    title: '',
    category_id: '',
    location_id: '',
    description: '',
    status: '',
    date_lost_or_found: '',
    contact_method: '',
    image: null,
  });

  const handleChangeOptions = (key, value) => {
    const auxValues = { ...values };
    if (key === "title"){
      const  filteredValue =  value.replace(/^\s+/, '').replace(/[^a-zA-Z0-9 .,]/g, '').replace(/\s+/g, ' ');
      auxValues[key] = filteredValue;
    }else{
      auxValues[key] = value;
    }
    setValues(auxValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values);
    setValues({
      title: '',
      category_id: '',
      location_id: '',
      description: '',
      status: '',
      date_lost_or_found: '',
      contact_method: '',
      image: null,
    });
  }



  return(
    <BasicLayout>
      <h1 className='report-form__title'>Reportar Objeto</h1>
      <form onSubmit={handleSubmit} className="report-form">
        <InputField
          label='NOMBRE DEL OBJETO'
          type='text'
          value={values.title}
          onChange={(e) => handleChangeOptions("title", e.target.value)}
          placeholder="Ej. Mochila Azul"
          required
          className='report-form__input'
        />

        <SelectField
          label="CATEGORÍA"
          value={values.category_id}
          onChange={(e) => handleChangeOptions("category_id", e.target.value)}
          placeholder="Selecciona una categoría"
          options={categoryOptions}
          required
        />

        <TextArea
          label="DESCRIPCIÓN BREVE"
          value={values.description}
          onChange={(e) => handleChangeOptions("description", e.target.value)}
          placeholder="Describe el objeto con detalles relevantes"
          required
        />

        <RadioGroup
          label="ESTADO"
          name="status"
          options={[
            { label: "PERDIDO", value: "PERDIDO" },
            { label: "ENCONTRADO", value: "ENCONTRADO" },
          ]}
          value={values.status}
          onChange={(e) => handleChangeOptions("status", e.target.value)}
          required
        />

        <SelectField
          label="UBICACIÓN"
          value={values.location_id}
          onChange={(e) => handleChangeOptions("location_id", e.target.value)}
          placeholder="Selecciona una ubicación"
          options={categoryOptions}
          required
        />

        <CalendarDate 
          label="Fecha de Perdida o hallazgo"
          values={values.date_lost_or_found} 
          onDateTimeChange={(value) => handleChangeOptions("date_lost_or_found", value)}
        />

        <InputField
          label='FORMA DE CONTACTO'
          type='text'
          value={values.contact_method}
          onChange={(e) => handleChangeOptions("contact_method", e.target.value)}
          placeholder="Correo electronico  o numero telefonico"
          required
          className='report-form__input'
        />
        <InputField
          label='IMAGEN DEL OBJETO'
          type='file'
          accept="image/png"
          onChange={(e) => handleChangeOptions("image", e.target.files[0])}
          required
          className='report-form__inputFile'
        />
        <MainButton
          text='Crear cuenta'
          type='submit'
          onClick={() => {}}
          className='report-form__button'
        />
      </form>
      
    </BasicLayout>
  )
}

export default RespondForms;