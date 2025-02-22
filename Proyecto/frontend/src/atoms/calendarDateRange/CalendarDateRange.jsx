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
  const [fechaInicio, setFechaInicio] = useState(
    values.fechaInicio ? dayjs(values.fechaInicio, 'D/M/YYYY') : null
  );
  const [fechaFin, setFechaFin] = useState(
    values.fechaFin ? dayjs(values.fechaFin, 'D/M/YYYY') : null
  );

  useEffect(() => {
    onDateTimeChange({
      fechaInicio: fechaInicio ? fechaInicio.format('YYYY-MM-DD') : null,
      fechaFin: fechaFin ? fechaFin.format('YYYY-MM-DD') : null,
    });
  }, [fechaInicio, fechaFin, onDateTimeChange]);

  const handleFechaInicioChange = (newValue) => {
    if (newValue) {
      setFechaInicio(newValue);
      if (fechaFin && newValue.isAfter(fechaFin)) {
        setFechaFin(null);
      }
    }
  };

  const handleFechaFinChange = (newValue) => {
    if (newValue) {
      setFechaFin(newValue);
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
              value={fechaInicio}
              onChange={handleFechaInicioChange}
              slotProps={{
                textField: {
                  placeholder: "Se elige una fecha",
                  variant: "outlined",
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
              minDate={fechaInicio || undefined}
              value={fechaFin}
              onChange={handleFechaFinChange}
              slotProps={{
                textField: {
                  placeholder: "Se elige una fecha",
                  variant: "outlined",
                },
              }}
            />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </div>
  );
}
