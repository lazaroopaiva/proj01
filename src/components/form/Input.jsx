import './Input.css';

export default function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
}) {
  return (
    <>
      <div className="form_control">
        <label htmlFor={name}>{text}:</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleOnChange}
          required
        />
      </div>
    </>
  );
}
