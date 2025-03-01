import './LostFound.scss';
import BasicLayout from "../../templates/layout/BasicLayout";
import SearchForm from "../searchForm/SearchForm";
import ItemCard from "../../molecules/itemCard/ItemCard";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Asegúrate de tener axios importado
import { useUserStore } from '../../store/userStore';
import dayjs from 'dayjs';

const categories = ["TODAS", "LLAVES", "ELECTRONICA", "ROPA", "DOCUMENTOS", "OTROS"];

const LostFound = () => {
  const { userId } = useUserStore();
  const [selectedCategory, setSelectedCategory] = useState("TODAS");
  const [items, setItems] = useState([]);  // <-- Estado para items traídos del backend
  const navigate = useNavigate();

  // Este useEffect se ejecutará al montar el componente.
  // Aquí obtienes la lista de objetos desde tu endpoint.
  useEffect(() => {
    const fetchObjects = async () => {
      try {
        
        const response = await axios.get(`http://localhost:3000/user/${ userId }/objects`, {
          withCredentials: true,
        });
        const fetchedItems = response.data.map((obj) => ({
          id: obj.report_id,
          title: obj.title,
          category: obj.category,
          status: obj.status,
          location: obj.location,
          date: dayjs(obj.date_lost_or_found).format('YYYY-MM-DD'),
          // Aquí armamos la URL para la imagen
          imageUrl: `http://localhost:3000/user/${ userId }/images/${obj.image_url}`,
        }));

        setItems(fetchedItems);
      } catch (error) {
        console.error("Error al obtener objetos:", error);
      }
    };

    fetchObjects();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleViewDetails = (id) => {
    console.log(`Ver detalles del objeto con ID: ${id}`);
    navigate(`/objectDetails?id=${id}`);
  };

  // Filtrado local en el front:
  const filteredItems = selectedCategory === "TODAS"
    ? items
    : items.filter((item) => item.category.toUpperCase() === selectedCategory);

  return (
    <BasicLayout>
      <div className='lost-found'>
        <h1 className='report-form__title'>Buscar Objeto</h1>
        <SearchForm />

        <label className="lost-found__label">CATEGORIA</label>
        <div className='lost-found__categories'>
          {categories.map((category) => (
            <button
              key={category}
              className={`lost-found__categoryButton ${
                selectedCategory === category ? 'lost-found__categoryButton--active' : ''
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='lost-found__grid'>
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              {...item}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>
    </BasicLayout>
  );
};

export default LostFound;
