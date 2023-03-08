import { Input } from "Components";
import { AdminMain, SideBar } from "Layouts";
import { BsPlusSquare } from "react-icons/bs";
import "../../../Assets/Styles/Pages/ManagementPanle/index.scss";
export const ManagementPanleOrders = () => {
  return (
    <div className="managementPanle">
      <div className="managementPanle__header">{/* <AdminHeader/> */}</div>
      <div className="managementPanle__main">
        <SideBar />
        <div className="flex col">
          <div className="managementPanle__main__header">
            <div className="flex gap-1 a-c">
              <label className="managementPanle__main__header__label">
                جستجو :{" "}
              </label>
              <Input
                type="search"
                holder="18 رکورد ...."
                inpType="searchBoxAdmin"
              />
            </div>

            <div className="flex gap-1 a-c">
              <label
                className="managementPanle__main__header__label"
                htmlFor="delivered"
              >
                سفارش های تحویل شده{" "}
              </label>
              <Input type="radio" name="orders" id="delivered" />
              <label
                className="managementPanle__main__header__label"
                htmlFor="notDelivered"
              >
                سفارش های در انتظار تحویل
              </label>
              <Input type="radio" name="orders" id="notDelivered" />
            </div>
          </div>

          <AdminMain />
        </div>
      </div>
    </div>
  );
};
