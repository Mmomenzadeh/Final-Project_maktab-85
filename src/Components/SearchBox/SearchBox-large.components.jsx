import { Input } from "Components";
import { BiSearchAlt } from "react-icons/bi";
import "../../Assets/Styles/Components/SearchBox/index.scss";

export const SearchBoxLarge = () => {
  return (
    <div className="searchBoxLarge">
      <select className="searchBoxLarge__select">
        <option value="">انتخاب دسته بندی </option>
      </select>
      <Input
        type="search "
        holder="جستجوی محصولات"
        inpType="searchBox-Home-large"
      />
      <BiSearchAlt size="2.2rem" color="#444" className="searchBoxLarge__icon" />
    </div>
  );
};
