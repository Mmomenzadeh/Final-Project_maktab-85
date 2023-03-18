import "../../Assets/Styles/Components/Button/index.scss"
export const Button = ({children , color , size , type ,outline , onClick}) => {
  return (
    <button className={`btn btn--${type} btn--${size} btn--${outline} btn--${color} `} onClick={onClick}>{children}</button>
  )
}
