import { Button, Input, Table } from "Components";
import { BASE_URL } from "Config";
import { useEffect, useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilterData } from "Redux/Slices/ProductSlice";
import "../../../Assets/Styles/Pages/ManagementPanle/index.scss";
import {
  fetchFilterOrders,
} from "../../../Redux/Slices/OrdersSlice";

export const ManagementPanleOrders = () => {
  const [filterParams, setFilterParams] = useState(false);
  console.log(filterParams);
  const { ordersData } = useSelector((state) => state.orders);
  console.log(ordersData);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchOrders());
    dispatch(fetchFilterOrders(`orders?delivered=${filterParams}`));
  }, [dispatch, filterParams]);

  // --------------------------------------------------------------------------------------------------------

  //// بجایی ایتم جوابی که از سمت سرور گرفتیم میزاریم
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 12;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = ordersData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(ordersData.length / 12);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 12) % ordersData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="managementPanle">
      <div className="flex col">
        <div className="managementPanle__table-header">
          <div className="flex gap-1 a-c">
            <label className="managementPanle__table-header__label">
              جستجو :{" "}
            </label>
            <Input
              type="search"
              holder="112 رکورد ...."
              inpType="searchBoxAdmin"
            />
          </div>

          <div className="flex gap-1 a-c">
            <label
              className="managementPanle__table-header__label"
              htmlFor="delivered"
            >
              سفارش های تحویل شده{" "}
            </label>
            <Input
              type="radio"
              name="delivered"
              id="delivered"
              onChange={() => setFilterParams(true)}
            />
            <label
              className="managementPanle__table-header__label"
              htmlFor="notDelivered"
            >
              سفارش های در انتظار تحویل
            </label>
            <Input
              type="radio"
              name="delivered"
              id="notDelivered"
              onChange={() => setFilterParams(false)}
            />
          </div>
        </div>
      </div>
      <Table>
        <thead>
          <tr className="thead__tr">
            <th> نام کاربر</th>
            <th> مجموع مبلغ </th>
            <th>زمان ثبت سفارش </th>
            <th>اقدامات</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((data) => {
            let total = 0;
            data.products.map((item) => {
              return (total = item.price * item.count);
            });

            let date = new Date(data.createdAt);
            date = date.toLocaleString("fa");
            return (
              <tr key={data.id} className="tbody__tr">
                <td style={{ width: "45rem" }} className="td-productName">
                  {data.username + " " + data.lastname}
                </td>

                <td style={{ width: "35rem", paddingRight: "3rem" }}>
                  {data.prices} تومان
                </td>
                <td style={{ width: "35rem", paddingRight: "5rem" }}>
                  {date.substring(0, 10)}
                </td>
                <td style={{ width: "15rem" }}>
                  <Button type="table-btn" outline="outline-blue">
                    بررسی
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="< next "
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=" previous >"
        renderOnZeroPageCount={null}
        className="pagination activePage-w flex gap-5 j-c a-c  "
        activeClassName="activePage  "

      />
    </div>
  );
};
