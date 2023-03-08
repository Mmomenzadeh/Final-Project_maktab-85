import { Input, Table } from "Components";
import { BsPlusSquare } from "react-icons/bs";
import "../../../Assets/Styles/Layout/MainAdmin/index.scss";
export const AdminMain = ({ data , status }) => {
  return (
    <div className="adminMain">
      {/* <div className="adminMain__header">
       <div className="flex gap-2">
       <div className="flex gap-1 a-c">
          <label className="adminMain__header__label">جستجو : </label>
          <Input type="search" holder="18 رکورد ...." inpType="searchBoxAdmin"/>
        </div>

        <div className="flex gap-1 a-c">
          <label className="adminMain__header__label"> دسته بندی  :</label>
          <select  className="adminMain__header__select">
            <option value="">همه </option>
          </select>
        </div>
       </div>

       <BsPlusSquare className="adminMain__header__icon"/>
      </div> */}
      <div className="adminMain__main">
        <Table data={data} >
          
        </Table>
      </div>
      <div className="adminMain__footer"></div>
    </div>
  );
};
