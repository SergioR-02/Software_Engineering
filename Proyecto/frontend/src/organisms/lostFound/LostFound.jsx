import './LostFound.scss';
import BasicLayout from "../../templates/layout/BasicLayout";
import SearchForm from "../searchForm/SearchForm";
import ItemCard from "../../molecules/itemCard/ItemCard";
import { useState } from 'react';

const categories = ["TODAS", "LLAVES", "ELECTRONICA", "ROPA", "DOCUMENTOS", "OTROS"]

const items = [
  {
    id: "1",
    title: "MOCHILA AZUL",
    category: "ROPA",
    status: "PERDIDO",
    location: "BIBLIOTECA",
    date: "2023 - 05 - 15",
    imageUrl: "../../../public/llaves.jpg",
  },
  {
    id: "2",
    title: "LLAVES CON LLAVERO",
    category: "LLAVES",
    status: "ECONTRADO",
    location: "CAFETERIA",
    date: "2023 - 05 - 16",
    imageUrl: "../../../public/audifonos.jpg",
  },
  {
    id: "3",
    title: "LAPTOP HP",
    category: "ELECTRONICA",
    status: "ENCONTRADO",
    location: "CAFETERIA",
    date: "2023 - 05 - 16",
    imageUrl: "../../../public/tarjeta.jpg",
  },
  {
    id: "2",
    title: "LLAVES CON LLAVERO",
    category: "LLAVES",
    status: "ECONTRADO",
    location: "CAFETERIA",
    date: "2023 - 05 - 16",
    imageUrl: "../../../public/audifonos.jpg",
  },
  {
    id: "3",
    title: "LAPTOP HP",
    category: "ELECTRONICA",
    status: "ENCONTRADO",
    location: "CAFETERIA",
    date: "2023 - 05 - 16",
    imageUrl: "../../../public/tarjeta.jpg",
  },
  {
    id: "1",
    title: "MOCHILA AZUL",
    category: "ROPA",
    status: "PERDIDO",
    location: "BIBLIOTECA",
    date: "2023 - 05 - 15",
    imageUrl: "../../../public/llaves.jpg",
  },
  {
    id: "2",
    title: "LLAVES CON LLAVERO",
    category: "LLAVES",
    status: "ECONTRADO",
    location: "CAFETERIA",
    date: "2023 - 05 - 16",
    imageUrl: "../../../public/audifonos.jpg",
  },
]

const LostFound = () => {
  const [selectedCategory, setSelectedCategory] = useState("TODAS");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const handleViewDetails = (id) => {
    console.log(`Ver detalles del objeto con ID: ${id}`)
    // Aquí puedes implementar la lógica para mostrar los detalles del objeto
  }

  const filteredItems =
    selectedCategory === "TODAS" ? items : items.filter((item) => item.category === selectedCategory)

  return (
    <BasicLayout>
      <div className='lost-found'>
        <h1 className='report-form__title'>Buscar Objeto</h1>
        <SearchForm /> 

        <label  className="lost-found__label">CATEGORIA</label>
        <div className='lost-found__categories'>
          {categories.map((category) => (
            <button key={category} 
              className={`lost-found__categoryButton ${selectedCategory === category ? 'lost-found__categoryButton--active' : ''}`} 
              onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className='lost-found__grid'>
          {filteredItems.map((item) => (
            <ItemCard key={item.id} {...item} onViewDetails={handleViewDetails} />
          ))}
        </div>
      </div>
  
    </BasicLayout>
  );
}

export default LostFound;
