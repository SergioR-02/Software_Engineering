/* eslint-disable react/prop-types */
import "./InputField.scss";

const InputField = ({ label, type, value, onChange }) => (
  <div className="input-field">
    <label className="input-field__label">{label}</label>
    <input type={type} value={value} onChange={onChange} className="input-field__input"/>
  </div>
)

export default InputField
