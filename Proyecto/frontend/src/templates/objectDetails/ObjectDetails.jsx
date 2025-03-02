import React, { useState, useEffect } from 'react';
import './ObjectDetails.scss';
import ObjectCard from '../../organisms/objectCard/ObjectCard';
import Header from '../../organisms/header/Header';
import { Footer } from '../../organisms/footer/Footer';
import { getFilteredObjects } from '../../utilities/getObjectId';
import { useUserStore } from '../../store/userStore';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';


export default function ObjectDetails() {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get('id');
  const { userId } = useUserStore();
  const [object, setObject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchObject = async () => {
      try {
        const data = await getFilteredObjects(userId, id);
        setObject(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchObject();
  }, [id]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Header />
      <div className='object-details-container'>
        <ObjectCard
          imageSrc={`http://localhost:3000/user/${userId}/images/${object.image_url}`}
          imageAlt='Imagen del objeto'
          title={object.title}
          category={object.category}
          state={object.status}
          location={object.location}
          date={dayjs(object.date_lost_or_found).format('DD/MM/YYYY')}
          description={object.description}
          contactInfo={object.contact_method}
        />
      </div>
      <Footer />
    </>
  );
}
