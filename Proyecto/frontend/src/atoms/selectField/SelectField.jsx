import './SelectField.scss'

const SelectField = ({ label, value, onChange, placeholder, options }) => {
  return (
    <div className="select-field">
      <label className="select-field__label">{label}</label>
      <select className="select-field__select" value={value} onChange={onChange}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField

