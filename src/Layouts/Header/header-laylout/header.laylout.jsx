import { Logo, SearchBox, SearchBoxLarge, Snackbar } from "Components";
import { Nav } from "Components/Nav/Nav.components";
import { BsHeart } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

import "../../../Assets/Styles/Layout/HeaderUser/index.scss";

export const Header = () => {
  return (
    <>
      <header>
        <div className="header-right">
          <Logo />
          <SearchBoxLarge />
        </div>
        <div className="header-left">
          <Link to="/login" className="header-left__icon">
            <VscAccount size="3rem" />
          </Link>

          <Link to="/login" className="header-left__Link">ورود / ثبت نام</Link>
          <div className="line-h"></div>
          <BsHeart size="2.5rem" className="header-left__icon" />
          <div className="line-h"></div>
          <Link className="header-left__icon">
            <IoBagOutline size="2.8rem" />
          </Link>
        </div>
      </header>
      <Nav/>
    </>
  );
};
