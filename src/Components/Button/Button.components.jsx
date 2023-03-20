import "../../Assets/Styles/Components/Button/index.scss"
export const Button = ({children , color , size , type ,outline , className ,  onClick , disabled}) => {
  return (
    <button className={`btn btn--${type} btn--${size} btn--${outline} btn--${color}  btn--${className}`} onClick={onClick} disabled={disabled}>{children}</button>
  )
}
