import "../../Assets/Styles/Components/Input/index.scss";
export const Input = ({
  type,
  holder,
  onChange,
  value,
  inpType,
  className,
}) => {
  return (
    <input
      className={`input input--${inpType} ${className}`}
      type={type}
      placeholder={holder}
      onChange={onChange}
      value={value}
    />
  );
};
