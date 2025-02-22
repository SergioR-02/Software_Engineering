
import CalendarDateRange from '../../atoms/calendarDateRange/CalendarDateRange';
import { useState } from 'react';
import InputField from '../../atoms/inputField/InputField';
import MainButton from '../../atoms/mainButton/MainButton';
import SelectField from '../../atoms/selectField/SelectField';

const categoryOptions = [
  { value: "1", label: "Electrónicos" },
  { value: "2", label: "Documentos" },
  { value: "3", label: "Accesorios" },
  { value: "4", label: "Otros" },
]

const SearchForm = () => {
  const [values, setValues] = useState({
    category: '',
    location: '',
    description: '',
    status: '',
    startDate: '',
    endDate: '',
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
      category: '',
      location: '',
      description: '',
      status: '',
      startDate: '',
      endDate: '',
    });
  }
  const handleDateTimeChange = (dates) => {
    console.log("Fechas seleccionadas:", dates);
    // Aquí puedes realizar otras acciones, como actualizar un estado o enviar los datos a una API
  };



  return(
    <form onSubmit={handleSubmit} className="report-form">
      <div className='ContainerCalendarRange'>
        <InputField
          label='PALABRAS CLAVE'
          type='text'
          value={values.title}
          onChange={(e) => handleChangeOptions("title", e.target.value)}
          placeholder="Ej. Mochila Azul"
          className='report-form__input'
        />
        <SelectField
          label="UBICACIÓN"
          value={values.location}
          onChange={(e) => handleChangeOptions("location", e.target.value)}
          placeholder="Selecciona una ubicación"
          options={categoryOptions}
        />
      </div>
      <CalendarDateRange
        onDateTimeChange={handleDateTimeChange}
        labelInicio="Fecha inicio"
        labelFin="Fecha final"
      />
      <MainButton
        text='Crear cuenta'
        type='submit'
        onClick={() => {}}
        className='report-form__button'
      />
    </form>

  )
}

export default SearchForm;