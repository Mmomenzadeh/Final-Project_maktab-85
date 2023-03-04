import "../../Assets/Styles/Components/Button/index.scss"
export const Button = ({children , color , size , type , onClick}) => {
  return (
    <button className={`btn btn--${type} btn--${size} `} onClick={onClick}>{children}</button>
  )
}
