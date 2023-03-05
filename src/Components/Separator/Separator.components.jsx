import "../../Assets/Styles/Components/Separator/index.scss"
export const Separator = ({title , img , icon}) => {
  return (
    <div className="separator flex col a-c gap-2">
        <div className="flex j-c">
            <img className="separator__img" src={img} alt={title} />
        </div>
        <div className=" flex gap-1 a-c">
            {icon}
        <h2 className="separator__title">{title}</h2>
        </div>
    </div>
  )
}
