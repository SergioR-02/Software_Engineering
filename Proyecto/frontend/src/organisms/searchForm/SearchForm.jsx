import './SearchForm.scss';
import CalendarDateRange from '../../atoms/calendarDateRange/CalendarDateRange';
import { useState } from 'react';
import InputField from '../../atoms/inputField/InputField';
import MainButton from '../../atoms/mainButton/MainButton';
import SelectField from '../../atoms/selectField/SelectField';
import { locationOptions } from '../../utilities/options';


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

      location: '',
      description: '',
      status: '',
      startDate: '',
      endDate: '',
    });
  }
  const handleDateTimeChange = (dates) => {
    setValues(prev => ({
      ...prev,
      startDate: dates.startDate || '',
      endDate: dates.endDate || ''
    }));
  };



  return(
    <form onSubmit={handleSubmit} className="search-form">
      <div className='ContainerCalendarRange'>
        <InputField
          label='PALABRAS CLAVE'
          type='text'
          value={values.description}
          onChange={(e) => handleChangeOptions("description", e.target.value)}
          placeholder="Ej. Mochila Azul"
          className='report-form__input'
        />
        <SelectField
          className='search-form__select'
          label="UBICACIÓN"
          value={values.location}
          onChange={(e) => handleChangeOptions("location", e.target.value)}
          placeholder="Selecciona una ubicación"
          options={locationOptions}
        />
      </div>
      <CalendarDateRange
        onDateTimeChange={handleDateTimeChange}
        labelInicio="Fecha inicio"
        labelFin="Fecha final"
      />
      <MainButton
        text='Buscar'
        type='submit'
        onClick={() => {}}
        className='search-form__button'
      />
    </form>

  )
}

export default SearchForm;