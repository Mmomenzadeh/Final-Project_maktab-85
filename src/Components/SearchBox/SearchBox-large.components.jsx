import { Input, Search } from "Components";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { EscBtn } from "Utils/EscBtn";
import "../../Assets/Styles/Components/SearchBox/index.scss";

export const SearchBoxLarge = ({showSearchBox , setShowSearchBox}) => {
  return (
    <div className="searchBoxLarge">
      {showSearchBox ? <Search  setShowSearchBox={setShowSearchBox} showSearchBox={showSearchBox}/> : null}
     
      <Input
        type="search "
        holder="جستجوی محصولات"
        inpType="searchBox-Home-large"
        value={""}
        onkeydown={(e)=>EscBtn(e , setShowSearchBox )}
        onClick={()=>{
          setShowSearchBox(true)
    document.body.style.overflow = "hidden";
       

        }}
      />
      <BiSearchAlt size="2.2rem" color="#444" className="searchBoxLarge__icon" />
    </div>
  );
};
