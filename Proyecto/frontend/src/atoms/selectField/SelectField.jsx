import './SelectField.scss'

const SelectField = ({ label, value, onChange, placeholder, options, ...props}) => {
  return (
    <div className="select-field">
      <label className="forms__label">{label}</label>
      <select className="select-field__select" value={value} onChange={onChange}
      {...props}>
        <option value="" disabled >
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

