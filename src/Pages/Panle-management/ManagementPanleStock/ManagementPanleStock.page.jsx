import { Button, Input, Table } from "Components";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilterData, fetchProducts } from "Redux/Slices/ProductSlice";
import "../../../Assets/Styles/Pages/ManagementPanle/index.scss";

export const ManagementPanleStock = () => {

  const [filterParams, setFilterParams] = useState("");
  const { productData } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

   // --------------------------------------------------------------------------------------------------------

  //// بجایی ایتم جوابی که از سمت سرور گرفتیم میزاریم
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 8;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = productData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productData.length / 8);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 8) % productData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  return (
    <div className="managementPanle">
      <div className="flex col">
        <div className="managementPanle__table-header">
          <div className="flex gap-2">
            <div className="flex gap-1 a-c">
              <label className="managementPanle__table-header__label">
                جستجو :{" "}
              </label>
              <Input
                type="search"
                holder="18 رکورد ...."
                inpType="searchBoxAdmin"
              />
            </div>
            <div className="flex gap-1 a-c">
              <label className="managementPanle__table-header__label">
                {" "}
                دسته بندی :
              </label>
              <select
                className="managementPanle__table-header__select"
                name="category"
                value={filterParams}
                onChange={(e) => {
                  dispatch(fetchFilterData(`products?category=${e.target.value}`))
                  setFilterParams(e.target.value);
                }}
              >
                <option value="">همه </option>
                <option value="موبایل">موبایل </option>
                <option value="لپ تاپ">لپ تاپ </option>
                <option value="هدفون">هدفون </option>
                <option value="کنسول بازی">کنسول بازی </option>
              </select>
            </div>
          </div>
          <Button type="table-btn" outline="outline-blue">
            ذخیره
          </Button>
        </div>

        <Table>
          <thead>
            <tr className="thead__tr">
              <th>نام کالا</th>
              <th> قیمت </th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((data) => {
              return (
                <tr key={data.id} className="tbody__tr">
                  <td style={{ width: "45rem" }}>{data.name}</td>

                  <td style={{ width: "5rem" }}>{data.price}</td>
                  <td style={{ width: "5rem", paddingRight: "5rem" }}>
                    {data.quantity}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <ReactPaginate
          breakLabel="..."
          nextLabel="< next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="previous > "
          renderOnZeroPageCount={null}
          className="pagination flex gap-5 mt-5 j-c a-c"
          activeClassName="activePage"
        />
      </div>
    </div>
  );
};
