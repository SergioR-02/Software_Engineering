import './Header.scss';
import Icon from '../../atoms/Icon/Icon.jsx';
import ClickText from '../../atoms/clickText/ClickText.jsx';
import IconLabelButton from '../../molecules/iconLabelButton/IconLabelButton.jsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import Logout from '../../utilities/logout';

const Header = () => {
  const [label, setLabel] = useState('Iniciar Sesión');
  const navigate = useNavigate();
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const clearUserStore = useUserStore((state) => state.clearUserStore);

  useEffect(() => {
    setLabel(isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión');
  }, [isAuthenticated]);

  const handleSessionClick = () => {
    if (isAuthenticated) {
      handleLogout();
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    Logout();
    clearUserStore();
  };

  const handleIconClick = () => {
    navigate(isAuthenticated ? '/home' : '/login');
  };

  return (
    <header className='header'>
      <div className='header__container'>
        <Icon name='logo_Icon' size={60} onClick={handleIconClick} clickable />
        {isAuthenticated && (
          <div className='header__access'>
            <ClickText
              text='Reportar Objeto'
              onClick={() => navigate('/report')}
            />
            <ClickText
              text='Buscar Objeto'
              onClick={() => navigate('/searchReports')}
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
