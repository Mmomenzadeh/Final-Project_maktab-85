import "../../Assets/Styles/Components/Nav/index.scss";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
export const Nav = () => {
  return (
    <nav className="nav">
      <select></select>

      <div className="nav__link">
        <IoHomeOutline className="nav__link__icons" />
        <span className="nav__link__item">صحفه ی اصلی</span>
      </div>
      
      <div className="nav__link">
        <HiOutlineShoppingCart className="nav__link__icons" />
        <span className="nav__link__item">فروشگاه</span>
      </div>
      <div className="nav__link">
        <FaRegNewspaper className="nav__link__icons" />
        <span className="nav__link__item">وبلاگ</span>
      </div>
      <div className="nav__link">
        <IoIosPeople className="nav__link__icons" />

        <span className="nav__link__item">درباره ی ما</span>
      </div>
      <div className="nav__link">
        <MdOutlinePhoneInTalk className="nav__link__icons" />
        <span className="nav__link__item">تماس با ما</span>
      </div>
      <div className="nav__contact-us">
        <div className="nav__contact-us__QA">سوالی دارید ؟ تماس بگرید</div>
        <p style={{fontSize:"1.3rem"}}><span style={{color:"#ef3a4f"}}>071</span>-36322050</p>
        <div className="nav__contact-us__icon">

        <MdOutlinePhoneInTalk className="nav__link__icons" />
        </div>


      </div>
    </nav>
  );
};
