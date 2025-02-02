import "./Icon.scss";
import Session_Icon from '../../Icons/Session_Icon.svg';
import Default_Icon from '../../Icons/Default_Icon.svg';

const IconComponents = {
  session_Icon: Session_Icon,
};

const Icon = ({ name, size = 16, className = "", ...rest }) => {
  const MyIcon = IconComponents[name] || Default_Icon;

  // Permitir tamaños en px o rem
  const parsedSize = typeof size === "number" ? `${size}px` : size;

  return (
    <img
      src={MyIcon}
      alt={`Icono ${name}`}
      className={`icon ${className}`}
      style={{ height: parsedSize, width: parsedSize }}
      {...rest}
    />
  );
};

export default Icon;