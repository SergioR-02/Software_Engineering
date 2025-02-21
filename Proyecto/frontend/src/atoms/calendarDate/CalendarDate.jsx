import 'dayjs/locale/es'; // Importa el idioma español
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { esES } from '@mui/x-date-pickers/locales';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './CalendarDate.scss';
import { bottomNavigationActionClasses } from '@mui/material';

// Configura dayjs para usar español
dayjs.locale('es');


// Diseño del calendario
const theme = createTheme({
  ...esES,
  typography: {
    fontFamily: 'var(--font-poppins)', // Aplica Poppins a todo el tema
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#252b39',
          height: '63px',
          borderRadius: '0.75rem',
          padding: '0 .5rem',
          fontFamily: 'var(--font-poppins)', // Aplica Poppins al input
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#252b39',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid white',
          },
        },
        input: {
          color: 'white',
          fontFamily: 'var(--font-poppins)', // Aplica Poppins al texto dentro del input
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          fontFamily: 'var(--font-poppins)', // Aplica Poppins a las etiquetas
          '&.Mui-focused': {
            color: 'white',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        overline: {
          color: 'white !important',
          fontFamily: 'var(--font-poppins)', // Aplica Poppins a la tipografía general
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-poppins)', // Aplica Poppins a los días del calendario
          '&.Mui-selected': {
            backgroundColor: '#252b39 !important',
            color: 'white !important',
            '&:hover': {
              backgroundColor: '#252b39 !important',
            },
          },
        },
      },
    },
  },
});


export default function CalendarDate({ onDateTimeChange, values, label }) {
  const [value, setValue] = useState(values.dayAndHour ? dayjs(values.dayAndHour, 'D/M/YYYY') : dayjs());;

  const handleChange = (newValue) => {
    if (newValue) {
      setValue(newValue);
      console.log('Fecha seleccionada:', newValue.format('YYYY-MM-DD'));
      onDateTimeChange(newValue.format('YYYY-MM-DD')); // Enviar en el formato YYYY-MM-DD
    }
  };


  return (
    <>
      <div className="ContainerCalendar"> 
        <label className="forms__label">{label}</label>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'es'}>
            <MobileDatePicker className='CalendarDate12'
              disableFuture
              value={value}
              onChange={handleChange}
              disableOpenPicker
            />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </>
  );
}