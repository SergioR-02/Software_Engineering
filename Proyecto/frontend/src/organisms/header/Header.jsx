import Icon from "../../atoms/icon/Icon";
import ClickText from "../../atoms/clickText/ClickText";
import IconLabelButton from "../../molecules/iconLabelButton/IconLabelButton";
import "./Header.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [access, setAccess] = useState(true);
  const [label, setLabel] = useState("Iniciar Sesión");

  useEffect(() => {
    if (access) {
      setLabel("Cerrar Sesión");
    } else {
      setLabel("Iniciar Sesión");
    }
  },[access]);

  return (
    <header className="header">
      <div className="header__container">
        <Icon name="logo_Icon" size={60} />
        {
          access && 
          <div className="header__access">
            <ClickText text="Buscar Objeto" onClick={() => console.log('Click en perfil')} />
            <ClickText text="Reportar Objeto" onClick={() => console.log('Click en favoritos')} />
          </div>
        }
        <IconLabelButton 
          icon="session_Icon" 
          label={label}
          onClick={() => console.log('Click en favorito')} 
        />
      </div>
        
    </header>
  );
}

export default Header;