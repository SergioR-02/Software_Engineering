import { useState, useRef } from 'react';
import BasicLayout from '../../templates/layout/BasicLayout';
import UserBasicInformation from '../../molecules/userBasicInformation/UserBasicInformation';
import ListButtons from '../../molecules/listButtons/ListButtons';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './MainProfileInformation.scss';
import ProfileInformation from '../../molecules/profileInformation/ProfileInformation';
import MyReports from '../../molecules/myReports/MyReports';
import { useUserStore } from '../../store/userStore';
import MainButton from '../../atoms/mainButton/MainButton';
import Logout from '../../utilities/logout';

export default function MainProfileInformation() {
  const clearUserStore = useUserStore((state) => state.clearUserStore);
  const { userName, userEmail } = useUserStore();
  const [selectedButton, setSelectedButton] = useState(
    'INFORMACIÓN DEL PERFIL',
  );
  const [transitionDirection, setTransitionDirection] = useState('right');

  const nodeRef = useRef(null); // Se usa useRef para evitar findDOMNode

  const handleLogout = () => {
    Logout();
    clearUserStore();
  };

  const buttons = [
    {
      nombre: 'INFORMACIÓN DEL PERFIL',
      onClick: () => {
        setTransitionDirection('right');
        setSelectedButton('INFORMACIÓN DEL PERFIL');
      },
    },
    {
      nombre: 'MIS REPORTES',
      onClick: () => {
        setTransitionDirection('left');
        setSelectedButton('MIS REPORTES');
      },
    },
  ];

  return (
    <BasicLayout>
      <div className='main-profile-information'>
        <h1 className='main-profile-information__title'>Perfil de Usuario</h1>
        <UserBasicInformation
          imageSrc='https://a.calameoassets.com/7368883/picture.jpg?_u=230511151316'
          name={userName}
          email={userEmail}
        />
        <MainButton
          text='Cerrar Sesión'
          className='main-profile-information__button'
          onClick={() => {
            handleLogout();
          }}
        />
        <ListButtons
          buttons={buttons}
          selectedButton={selectedButton}
          classNameC='p_main-profile-information__buttons'
          className='main-profile-information__buttons'
        />

        {/* Contenedor para la transición */}
        <div className='content-transition'>
          <SwitchTransition>
            <CSSTransition
              key={selectedButton}
              timeout={300}
              classNames={`slide-${transitionDirection}`}
              nodeRef={nodeRef}
            >
              <div ref={nodeRef} className='transition-content'>
                {selectedButton === 'INFORMACIÓN DEL PERFIL' ? (
                  <ProfileInformation />
                ) : (
                  <MyReports />
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </BasicLayout>
  );
}
