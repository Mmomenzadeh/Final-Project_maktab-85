import { IoIosArrowBack } from "react-icons/io";
import "../../Assets/Styles/Components/HeadingTitle/index.scss";
export const HeadingTitle = ({titleFa , titleEn}) => {
  return (
    <div className="headingTitle">
        <div className="headingTitle__title-fa">{titleFa}</div>
        <div className="headingTitle__title-en">{titleEn}</div>
        <div className="line"></div>
        <div className="headingTitle__link">
            <p style={{fontSize:"1rem"}}>مشاهده ی همه </p>
            <IoIosArrowBack size="1.5rem"/>
        </div>


    </div>
  )
}
