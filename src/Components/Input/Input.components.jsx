import "../../Assets/Styles/Components/Input/index.scss";
export const Input = ({
  type,
  holder,
  value,
  inpType,
  className,
  validate ,
  name,
  ...rest
}) => {
  return (
    <input
      className={`input input--${inpType} input--${className}`}
      type={type}
      placeholder={holder}
      value={value}
      name ={name}
      {...validate}
      {...rest}
    />
  );
};
