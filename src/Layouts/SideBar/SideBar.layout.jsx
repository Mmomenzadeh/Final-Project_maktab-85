import { FaRegUser } from "react-icons/fa";
import { MdAccountCircle, MdOutlineInventory } from "react-icons/md";
import { TbBookmarks, TbCategory, TbFileInvoice, TbReportSearch } from "react-icons/tb";
import { TfiComments } from "react-icons/tfi";
import { IoIosPaper } from "react-icons/io";
import { Link } from "react-router-dom";
import "../../Assets/Styles/Layout/SideBar/index.scss";
import { IoStorefrontSharp } from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
export const SideBar = () => {
  return (
    <div className="sideBar">
      <Link to="" className="sideBar__logo">
        <span className="sideBar__logo__title-one">MARVEL</span><span className="sideBar__logo__title-sec">Digist</span>
      </Link>
      <Link to="" className="sideBar__item">
        <TbCategory className="sideBar__item__icon" />
        <span className="sideBar__item__title">کالاها</span>
      </Link>

      <Link to="" className="sideBar__item">
        <MdOutlineInventory className="sideBar__item__icon" />
        <span className="sideBar__item__title">موجودی و قیمت ها</span>
      </Link>

      <Link to="" className="sideBar__item">
        <TbFileInvoice className="sideBar__item__icon" />
        <span className="sideBar__item__title">سفارش ها</span>
      </Link>

      <Link to="" className="sideBar__item">
        <FaRegUser className="sideBar__item__icon" />
        <span className="sideBar__item__title">کاربران</span>
      </Link>

      <Link to="" className="sideBar__item">
        <TfiComments className="sideBar__item__icon" />
        <span className="sideBar__item__title">دیدگاه ها</span>
      </Link>

      <Link to="" className="sideBar__item">
        <TbReportSearch className="sideBar__item__icon" />
        <span className="sideBar__item__title">گزارشات</span>
      </Link>

      <Link to="" className="sideBar__item">
        <TbBookmarks className="sideBar__item__icon" />
        <span className="sideBar__item__title">راهنما</span>
      </Link>

      <div className="sideBar__line-h"></div>

      <Link to="" className="sideBar__item">
        <SlSettings className="sideBar__item__icon" />
        <span className="sideBar__item__title">تنظیمات</span>
      </Link>

      <Link to="" className="sideBar__item">
        <BiSupport className="sideBar__item__icon" />
        <span className="sideBar__item__title">پشتیبانی</span>
      </Link>

      <Link to="" className="sideBar__item">
        <MdAccountCircle className="sideBar__item__icon" />
        <span className="sideBar__item__title">حساب کاربری</span>
      </Link>

      <div className="sideBar__line-h"></div>

      <div className="flex j-c ">
        <Link to="" className="sideBar__StoreLink">
          <IoStorefrontSharp style={{ fontSize: "2.5rem" }} />
          <span style={{ fontSize: "1.5rem" }}>فروشگاه</span>
        </Link>
      </div>
    </div>
  );
};
