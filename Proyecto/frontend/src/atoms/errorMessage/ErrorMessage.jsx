import "./ErrorMessage.scss";

/* eslint-disable react/prop-types */
const ErrorMessage = ({ message, className}) => (
  message ? <p className={`${className} ErrorMessage`}>{message}</p> : null
);

export default ErrorMessage;