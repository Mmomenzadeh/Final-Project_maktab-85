import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../Assets/Styles/Components/HeadingTitle/index.scss";
export const HeadingTitle = ({ title , size }) => {
  return (
    <div className="headingTitle flex ">
      <p className={`headingTitle__title `}>{title}</p>
      <div className={`headingTitle__dot headingTitle__dot--${size}`}></div>
      <Link className="headingTitle__link flex">
        <p>مشاهده همه </p>
        <MdOutlineKeyboardArrowLeft />
      </Link>
    </div>
  );
};
