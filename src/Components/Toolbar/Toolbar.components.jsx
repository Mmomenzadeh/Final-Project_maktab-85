import { AiOutlineHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import "../../Assets/Styles/Components/Toolbar/index.scss";
import { Link } from "react-router-dom";
export const Toolbar = () => {
  return (
    <div className="toolbar">

      <Link to="" className="toolbar__item ">
        <AiOutlineHome className="toolbar__item__icon" />
        <span className="toolbar__item__title">خانه</span>
      </Link>

      <Link to="" className="toolbar__item">
        <BiCategoryAlt className="toolbar__item__icon" />
        <span className="toolbar__item__title">دسته بندی ها</span>
      </Link>

      <Link to="" className="toolbar__item">
        <FaRegNewspaper className="toolbar__item__icon" />
        <span className="toolbar__item__title">وبلاگ</span>
      </Link>

      <Link to="" className="toolbar__item">
        <SlBasket className="toolbar__item__icon" />
        <span className="toolbar__item__title">سبد خرید</span>
      </Link>

      <Link to="" className="toolbar__item">
        <IoPersonOutline className="toolbar__item__icon" />
        <span className="toolbar__item__title">حساب من</span>
      </Link>
    </div>
  );
};
