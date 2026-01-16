export default function Input({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 transition-colors w-full"
      />
    </div>
  );
}
