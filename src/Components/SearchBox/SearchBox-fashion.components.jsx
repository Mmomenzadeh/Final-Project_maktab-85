import "../../Assets/Styles/Components/SearchBox/index.scss"
import { BiSearchAlt } from "react-icons/bi";

export const SearchBox_fashion = () => {
  return (
    <div className="searchBox">
        <div>
        <select className="searchBox__select">
  
        <option value="">انتخاب دسته بندی </option>
        <option value="">کالای دیجتال</option>
        <option value="">تخفیف ها </option>
        <option value="">کنسول بازی</option>
        <option value="">موبایل و تبلت </option>
        <option value="">هدفون و هدست </option>
        <option value="">محصولات پر طرفدار</option>
 
      </select>
      <input type="search " placeholder="جستجوی محصولات"  className="searchBox__input"/>
        </div>
      <BiSearchAlt size="2.2rem" color="#444" />
    </div>
  );
};
