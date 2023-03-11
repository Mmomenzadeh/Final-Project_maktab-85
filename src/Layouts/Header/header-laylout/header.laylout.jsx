import { Logo, SearchBox, Snackbar } from "Components";
import React from "react";
import { BiMenu } from "react-icons/bi";
import { RiQuestionAnswerLine } from "react-icons/ri";
import "../../../Assets/Styles/Layout/HeaderUser/index.scss";

export const Header = () => {
  return (
    <>
      <header className="header ">
        <div className="header__snackbar">
        <Snackbar />
        </div>
        <div className="header__body ">
        <div className="flex j-sb a-c ">
          <BiMenu className="header-icon hover" />
          <Logo />
          <RiQuestionAnswerLine className="header-icon  hover" />
        </div>
        <div className="header__searchBox">
          <SearchBox />
        </div>
        </div>
        <div className="header__nav"></div>
      </header>
    </>
  );
};
