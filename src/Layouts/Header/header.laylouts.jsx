import { SearchBox } from "Components";
import { BsHeart } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import "../../Assets/Styles/Laylout/header/index.scss";

export const Header = () => {
  return (
    <header>
      <div className="header-right">
        <div className="logo">
            <img className="logo-img" src="https://www.uplooder.net/img/image/98/2c23735ae2a82b660906d12e520ad41c/Marvel-Logo.svg.png" alt="" />
        </div>
        <SearchBox />
      </div>
      <div className="header-left">
        <VscAccount size="2.3rem" color="gray"  className="header-left__icon" />
        <p className="header-left__p">ورود / ثبت نام</p>
        <div className="line-h"></div>
        <BsHeart size="1.8rem"color="gray" className="header-left__icon" />
        <div className="line-h"></div>
        <IoBagOutline size="1.8rem" color="gray" className="header-left__icon"/>
     
      </div>
    </header>
  );
};
