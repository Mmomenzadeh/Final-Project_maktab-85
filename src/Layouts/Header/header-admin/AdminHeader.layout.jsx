import { Input, Logo } from "Components";
import { AiTwotoneBell } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import "../../../Assets/Styles/Layout/HeaderAdmin/index.scss";
export const AdminHeader = () => {
  return (
    <div className="adminHeader">
{/* 
      <div className="flex a-c">
      <Logo/>
      <Input type="search" holder="جستوجو" inpType="searchBoxAdmin" />
      </div> */}

      {/* <div className="adminHeader__account">
        <IoPersonOutline className="adminHeader__account__icon-one" />
        <span className="adminHeader__account__txt">مهسا مومن زاده</span>
        <IoMdArrowDropdown className="adminHeader__account__icon-sec" />
        <AiTwotoneBell/>
      </div> */}

    </div>
  );
};
