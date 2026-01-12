export default function Input({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
