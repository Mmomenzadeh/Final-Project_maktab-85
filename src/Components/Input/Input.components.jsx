import "../../Assets/Styles/Components/Input/index.scss";
export const Input = ({
  type,
  holder,
  value,
  defaultValue,
  onChange , 
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
      defaultValue={defaultValue}
      onChange={onChange}
      name ={name}
      {...validate}
      {...rest}
    />
  );
};
