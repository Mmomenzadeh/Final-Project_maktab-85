import { FaRegNewspaper } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import "../../Assets/Styles/Components/Nav/index.scss";
import { Link } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { useState } from "react";
import { MegaMenu } from "Components/MegaMenu/MegaMenu.components";

export const Nav = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  return (
    <nav className="nav">
      <div
        className="nav__category"
        onMouseEnter={() => setShowMegaMenu(true)}
        onMouseLeave={() => setShowMegaMenu(false)}
      >
        <BiCategoryAlt className="nav__category__icon" />
        <span className="nav__category__title">دسته بندی کالاها</span>
        {showMegaMenu ? <MegaMenu /> : null}
      </div>

      <Link className="nav__link">
        <IoHomeOutline className="nav__link__icons" />
        <span className="nav__link__item">صحفه ی اصلی</span>
      </Link>

      <Link className="nav__link">
        <HiOutlineShoppingCart className="nav__link__icons" />
        <span className="nav__link__item">فروشگاه</span>
      </Link>
      <Link className="nav__link">
        <FaRegNewspaper className="nav__link__icons" />
        <span className="nav__link__item">وبلاگ</span>
      </Link>
      <Link className="nav__link">
        <IoIosPeople className="nav__link__icons" />

        <span className="nav__link__item">درباره ی ما</span>
      </Link>
      <Link className="nav__link">
        <MdOutlinePhoneInTalk className="nav__link__icons" />
        <span className="nav__link__item">تماس با ما</span>
      </Link>

      <div className="nav__contact-us">
        <div className="nav__contact-us__QA">سوالی دارید ؟ تماس بگرید</div>
        <p style={{ fontSize: "1.3rem" }}>
          <span style={{ color: "#ef3a4f" }}>071</span>-36322050
        </p>
        <div className="nav__contact-us__icon">
          <MdOutlinePhoneInTalk className="nav__link__icons" />
        </div>
      </div>
    </nav>
  );
};
