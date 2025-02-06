import "./MainButton.scss";

/* eslint-disable react/prop-types */
const MainButton = ({ text, onClick, className }) => (
  <button 
    onClick={onClick}
    className={`${className} mainButton`}
  >
    {text}
  </button>
);

export default MainButton;