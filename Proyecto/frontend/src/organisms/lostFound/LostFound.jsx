import './LostFound.scss';
import BasicLayout from "../../templates/layout/BasicLayout";
import SearchForm from "../searchForm/SearchForm";

const categories = ["TODAS", "LLAVES", "ELECTRONICA", "ROPA", "DOCUMENTOS", "OTROS"]

const LostFound = () => {
  return (
    <BasicLayout>
      <div className='lost-found'>
        <h1 className='report-form__title'>Buscar Objeto</h1>
        <SearchForm /> 
        <label  className="lost-found__label">CATEGORIA</label>
        <div className='lost-found__categories'>
          {categories.map((category) => (
            <button key={category} className='lost-found__categoryButton'>
              {category}
            </button>
          ))}
        </div>
      </div>
      
    </BasicLayout>
  );
}

export default LostFound;
