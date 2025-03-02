import './MyReports.scss';
import { useNavigate } from 'react-router-dom';
import { deleteReport } from '../../utilities/deleteReport';

export default function MyReports({ reports, userId, setReload, reload }) {
  const navigate = useNavigate();

  const handleDeleteReport = async (reportId) => {
    try {
      await deleteReport(userId, reportId);
      console.log('Reporte eliminado exitosamente');
      setReload(!reload);
    } catch (error) {
      console.error('Error al eliminar el reporte:', error);
    }
  };

  const datos = reports;

  return (
    <div className='my-reports-container'>
      <div className='my-reports'>
        <h2 className='my-reports__title'>Mis reportes</h2>
        <p className='my-reports__description'>
          Historial de objetos reportados como perdidos o encontrados.
        </p>
        <div className='my-reports__list'>
          {datos.map((dato) => (
            <div key={dato.report_id} className='my-reports__item'>
              <h3 className='my-reports__item-title'>{dato.titulo}</h3>
              <p
                className={`my-reports__item-status my-reports__item-status--${dato.estado.toLowerCase()}`}
              >
                ESTADO: {dato.estado}
              </p>
              <p className='my-reports__item-date'>FECHA: {dato.fecha}</p>
              <div className='my-reports__item-actions'>
                <button className='my-reports__item-button my-reports__item-button--edit' onClick={() => navigate(`/editar/${dato.report_id}`)}>
                  EDITAR
                </button>
                <button className='my-reports__item-button my-reports__item-button--delete' onClick={() => handleDeleteReport(dato.report_id)}>
                  ELIMINAR
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
