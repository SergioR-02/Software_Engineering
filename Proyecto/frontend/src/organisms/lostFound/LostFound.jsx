import './LostFound.scss';
import BasicLayout from '../../templates/layout/BasicLayout';
import SearchForm from '../searchForm/SearchForm';
import ItemCard from '../../molecules/itemCard/ItemCard';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getObjects } from '../../utilities/foundObjects';
import { useUserStore } from '../../store/userStore';
import dayjs from 'dayjs';
import { categoryFound } from '../../utilities/options';

const LostFound = () => {
  const { userId } = useUserStore();
  const [selectedCategory, setSelectedCategory] = useState('TODAS');
  const [items, setItems] = useState([]); // <-- Estado para items traídos del backend
  const navigate = useNavigate();

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const data = await getObjects(userId);

        // Formateamos el arreglo que viene de la API:
        const fetchedItems = data.map((obj) => ({
          id: obj.report_id,
          title: obj.title,
          category: obj.category,
          status: obj.status,
          location: obj.location,
          date: dayjs(obj.date_lost_or_found).format('DD-MM-YYYY'),
          imageUrl: `https://api-backend-lostandfound-production.up.railway.app/user/${userId}/images/${obj.image_url}`,
        }));
        console.log(fetchedItems);

        setItems(fetchedItems);
      } catch (error) {
        console.error('Error al obtener objetos:', error);
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

  console.log(selectedCategory);
  // Filtrado local en el front:
  const filteredItems =
    selectedCategory === 'TODAS'
      ? items
      : items.filter(
          (item) =>
            item.category.toUpperCase() === selectedCategory.toUpperCase(),
        );

  return (
    <BasicLayout>
      <div className='lost-found'>
        <h1 className='report-form__title'>Buscar Objeto</h1>
        <SearchForm />

        <label className='lost-found__label'>CATEGORIA</label>
        <div className='lost-found__categories'>
          {categoryFound.map((category) => (
            <button
              key={category}
              className={`lost-found__categoryButton ${
                selectedCategory === category
                  ? 'lost-found__categoryButton--active'
                  : ''
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
