import 'dayjs/locale/es'; // Importa el idioma español
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { esES } from '@mui/x-date-pickers/locales';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../calendarDate/CalendarDate.scss';
import './CalendarDateRange.scss';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; // Importa el icono
import InputAdornment from '@mui/material/InputAdornment'; 

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
          height: '48px',
          borderRadius: '0.75rem',
          padding: '0 1rem 0 0.2rem',
          fontFamily: 'var(--font-poppins)',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#252b39',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid white',
          },
        },
        input: {
          color: 'white',
          fontFamily: 'var(--font-poppins)',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          fontFamily: 'var(--font-poppins)',
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
          fontFamily: 'var(--font-poppins)',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-poppins)',
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

export default function CalendarDateRange({
  onDateTimeChange,
  values = {},
  labelInicio = "Fecha inicio",
  labelFin = "Fecha final"
}) {
  const [startDate, setstartDate] = useState(
    values.startDate ? dayjs(values.startDate, 'D/M/YYYY') : null
  );
  const [endDate, setendDate] = useState(
    values.endDate ? dayjs(values.endDate, 'D/M/YYYY') : null
  );

  useEffect(() => {
    onDateTimeChange({
      startDate: startDate ? startDate.format('YYYY-MM-DD') : null,
      endDate: endDate ? endDate.format('YYYY-MM-DD') : null,
    });
  }, [startDate, endDate, onDateTimeChange]);

  const handlestartDateChange = (newValue) => {
    if (newValue) {
      setstartDate(newValue);
      if (endDate && newValue.isAfter(endDate)) {
        setendDate(null);
      }
    }
  };

  const handleendDateChange = (newValue) => {
    if (newValue) {
      setendDate(newValue);
    }
  };

  return (
    <div className="ContainerCalendarRange">
      <div className="ContainerCalendar">
        <label className="forms__label">{labelInicio}</label>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <MobileDatePicker
            className='CalendarDate12'
            disableFuture
            value={startDate}
            onChange={handlestartDateChange}
            slotProps={{
              textField: {
                placeholder: "Se elige una fecha",
                variant: "outlined",
                InputProps: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarMonthIcon sx={{ color: 'white' }}/>
                    </InputAdornment>
                  ),
                },
              },
            }}
          />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
      <div className="ContainerCalendar">
        <label className="forms__label">{labelFin}</label>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <MobileDatePicker
            className='CalendarDate12'
            disableFuture
            minDate={startDate || undefined}
            value={endDate}
            onChange={handleendDateChange}
            slotProps={{
              textField: {
                placeholder: "Se elige una fecha",
                variant: "outlined",
                InputProps: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarMonthIcon sx={{ color: 'white' }}/>
                    </InputAdornment>
                  ),
                },
              },
            }}
          />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </div>
  );
}
