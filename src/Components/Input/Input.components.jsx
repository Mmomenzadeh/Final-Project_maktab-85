import "../../Assets/Styles/Components/Input/index.scss";
export const Input = ({
  type,
  holder,
  onChange,
  value,
  inpType,
  className,
  id ,
  name
}) => {
  return (
    <input
      className={`input input--${inpType} ${className}`}
      type={type}
      placeholder={holder}
      onChange={onChange}
      value={value}
      id={id}
      name={name}
    />
  );
};
