import "../../Assets/Styles/Components/Button/index.scss"
export const Button = ({color , size , text , onClick , style , outline }) => {
  return (
    <button className={`btn btn--${size} btn--${style} `}>{text}</button>
  )
}
