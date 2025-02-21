import './Header.scss';
import Icon from '../../atoms/icon/Icon';
import ClickText from '../../atoms/clickText/ClickText';
import IconLabelButton from '../../molecules/iconLabelButton/IconLabelButton';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [access, setAccess] = useState(true);
  const [label, setLabel] = useState('Iniciar Sesión');
  const navigate = useNavigate();

  useEffect(() => {
    setLabel(access ? 'Cerrar Sesión' : 'Iniciar Sesión');
  }, [access]);

  const handleSessionClick = () => {
    if (access) {
      setAccess(false);
      console.log('Sesión cerrada');
    } else {
      navigate('/login');
    }
  };

  const handleIconClick = () => {
    navigate(access ? '/home' : '/login');
  };

  return (
    <header className='header'>
      <div className='header__container'>
        <Icon name='logo_Icon' size={60} onClick={handleIconClick} clickable/>
        {access && (
          <div className='header__access'>
            <ClickText
              text='Reportar Objeto'
              onClick={() => navigate('/report')}
            />
            <ClickText
              text='Buscar Objeto'
              onClick={() => console.log('Click en perfil')}
            />
          </div>
        )}
        <IconLabelButton
          icon='session_Icon'
          label={label}
          onClick={handleSessionClick}
        />
      </div>
    </header>
  );
};

export default Header;
