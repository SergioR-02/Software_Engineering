import './ObjectDetails.scss';
import ObjectCard from '../../organisms/objectCard/ObjectCard';
import Header from '../../organisms/header/Header';
import { Footer } from '../../organisms/footer/Footer';

export default function ObjectDetails() {
  return (
    <>
      <Header />
      <div className='object-details-container'>
        <ObjectCard
          imageSrc='/public/llaves.jpg'
          imageAlt='Imagen del objeto'
          title='LLaves de toallin'
          category='llaves'
          state='Perdido'
          location='Biblioteca'
          date='2023-05-15'
          // description='llaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencialllaes con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencial'
          description={'llaves con llaverito de toallin, tiene una llave de la casa y un lector para conjunto residencial'}
          contactInfo='juan.perez@unal.edu.co'
        />
      </div>
      <Footer />
    </>
  );
}
