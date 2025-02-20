import './RespondForms.scss';
import BasicLayout from '../../templates/layout/BasicLayout';
import CalendarDate from '../../atoms/calendarDate/CalendarDate';
import { useState } from 'react';
import InputField from '../../atoms/inputField/InputField';
import MainButton from '../../atoms/mainButton/MainButton';
import RadioGroup from '../../atoms/radioGroup/RadioGroup';
import SelectField from '../../atoms/selectField/SelectField';
import TextArea from '../../atoms/textArea/TextArea';

const categoryOptions = [
  { value: "1", label: "Electrónicos" },
  { value: "2", label: "Documentos" },
  { value: "3", label: "Accesorios" },
  { value: "4", label: "Otros" },
]

const RespondForms = () => {
  const [values, setValues] = useState({
    title: '',
    category_id: '',
    location_id: '',
    description: '',
    status: '',
    date_lost_or_found: '',
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
    });

  }



  return(
    <BasicLayout>
      <form onSubmit={handleSubmit} className="report-form">

        <h1>Crear nueva cuenta</h1>

        <InputField
          label='Nombre del objeto'
          type='text'
          value={values.title}
          onChange={(e) => handleChangeOptions("title", e.target.value)}
          placeholder="Ingresa el título"
          required
          className=""
        />

        <SelectField
          label="CATEGORÍA"
          value={values.category_id}
          onChange={(e) => handleChangeOptions("category", e.target.value)}
          placeholder="Selecciona una Ubicacion"
          options={categoryOptions}
        />

        <TextArea
          label="DESCRIPCIÓN BREVE"
          value={values.description}
          onChange={(e) => handleChangeOptions("description", e.target.value)}
          placeholder="Describe el objeto con detalles relevantes"
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
        />

        <SelectField
          label="UBICACIÓN"
          value={values.location_id}
          onChange={(e) => handleChangeOptions("location_id", e.target.value)}
          placeholder="Selecciona una categoría"
          options={categoryOptions}
        />

        <CalendarDate 
          label="Fecha de Perdida o hallazgo"
          values={values.date_lost_or_found} 
          onDateTimeChange={(value) => handleChangeOptions("date_lost_or_found", value)}
        />

        <MainButton
          text='Crear cuenta'
          type='submit'
          onClick={() => {}}
          className='Reportar Objeto'
        />
      </form>
    </BasicLayout>
  )
}

export default RespondForms;