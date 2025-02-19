import './MyReports.scss';

export default function MyReports() {
  const datos = [
    {
      titulo: 'Mochila Azul',
      estado: 'Perdido',
      fecha: '12/12/2021',
      id: 1,
    },
    {
      titulo: 'Celular',
      estado: 'Encontrado',
      fecha: '12/12/2021',
      id: 2,
    },
    {
      titulo: 'Laptop',
      estado: 'Perdido',
      fecha: '12/12/2021',
      id: 3,
    },
  ];
  return (
    <div className='my-reports-container'>
      <div className='my-reports'>
        <h2 className='my-reports__title'>Mis reportes</h2>
        <p className='my-reports__description'>
          Historial de objetos reportados como perdidos o encontrados.
        </p>
        <div className='my-reports__list'>
          {datos.map((dato) => (
            <div key={dato.id} className='my-reports__item'>
              <h3 className='my-reports__item-title'>{dato.titulo}</h3>
              <p
                className={`my-reports__item-status my-reports__item-status--${dato.estado.toLowerCase()}`}
              >
                ESTADO: {dato.estado}
              </p>
              <p className='my-reports__item-date'>
                FECHA: {dato.fecha}
              </p>
              <div className='my-reports__item-actions'>
                <button className='my-reports__item-button my-reports__item-button--edit'>
                  EDITAR
                </button>
                <button className='my-reports__item-button my-reports__item-button--delete'>
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
