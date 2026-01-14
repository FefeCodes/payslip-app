export default function Input({
  type,
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
        className="p-2 border rounded-md w-full"
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
