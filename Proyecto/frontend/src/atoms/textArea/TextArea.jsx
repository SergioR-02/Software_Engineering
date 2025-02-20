import "./TextArea.scss"

const TextArea = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="text-area">
      <label className="text-area__label">{label}</label>
      <textarea className="text-area__input" value={value} onChange={onChange} placeholder={placeholder} rows={4} />
    </div>
  )
}

export default TextArea

