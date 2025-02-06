import "./LostObjectsSection.scss";
import BasicLayout from "../../templates/layout/BasicLayout";
import CardButton from "../../molecules/cardButton/CardButton";


const LostObjectsSection = () => {
  return (
    <BasicLayout>
      <div className="objects-section">
        <h1 className="objects-section__title">
          Objetos Perdidos
        </h1>
        <h3 className="objects-section__subtitle">
          Elige una categoría
        </h3>
        <div className="objects-section__cards">
          <CardButton 
            title="Reportar un Objeto" 
            text="¿Perdiste algo o encontraste un objeto?" 
            button="Crear Reportes"
            onClick={() => console.log('Reportar objeto perdido')} 
          />
          <CardButton 
            title="Buscar Objetos" 
            text="Encuentra objetos perdidos o reportados" 
            button="Buscar Objetos"
            onClick={() => console.log('Reportar objeto encontrado')} 
          />
        </div>
      </div>
    </BasicLayout>
  );
}

export default LostObjectsSection;