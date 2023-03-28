import { EditeStockService } from "API";
import { Button, Input, Table } from "Components";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilterData, fetchProducts } from "Redux/Slices/ProductSlice";
import "../../../Assets/Styles/Pages/ManagementPanle/index.scss";

export const ManagementPanleStock = () => {
  ///---------------------------------Input Value---------------------------------------------
  const [inputValue, setInputValue] = useState({});
  const [stockList, setStockList] = useState([]);
  console.log(stockList);

  ///------------------------- fetch data ---------------------------------------------
  const [filterParams, setFilterParams] = useState("");
  const { productData } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // -----------------------------------------Pagination---------------------------------------------------------------

  //// بجایی ایتم جوابی که از سمت سرور گرفتیم میزاریم
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 12;
  const currentItems = productData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productData.length / 12);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 12) % productData.length;
    setItemOffset(newOffset);
  };
  ////-------------------------------------

  const saveBtnHandler = () => {
    EditeStockService(stockList)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(fetchProducts());
      });
  };

  ////------------------------------searchBox------------------------------------------------

  const searchHandler = (queryString) => {};

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
                holder="112 رکورد ...."
                inpType="searchBoxAdmin"
                onChange={(e) => searchHandler(e.target.value)}
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
                  dispatch(
                    fetchFilterData(`products?category=${e.target.value}`)
                  );
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
          <Button
            type="table-btn"
            outline="stockPage"
            onClick={saveBtnHandler}
            className={
              inputValue.price === "" && inputValue.quantity === ""
                ? "disabled"
                : "nonDisabled"
            }
            disabled={!(inputValue.price || inputValue.quantity)}
          >
            ذخیره
          </Button>
        </div>

        <Table className="adminTabel">
          <thead className="adminTabel__thead">
            <tr className="adminTabel__thead__tr">
              <th className="adminTabel__thead__tr__td">نام کالا</th>
              <th className="adminTabel__thead__tr__td"> قیمت </th>
              <th className="adminTabel__thead__tr__td">موجودی</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((data) => {
              return (
                <tr key={data.id} className="adminTabel__tbody__tr">
                  <td
                    style={{ width: "45rem" }}
                    className="adminTabel__tbody__tr__td "
                  >
                    {data.name}
                  </td>

                  <td
                    style={{ width: "5rem" }}
                    className="adminTabel__tbody__tr__td"
                  >
                    <Input
                      defaultValue={data.price}
                      className="stock"
                      onChange={(e) => {
                        setInputValue({
                          ...inputValue,
                          price: e.target.value,
                          id: data.id,
                        });
                      }}
                      onBlur={() => setStockList([...stockList, inputValue])}
                    />
                  </td>
                  <td
                    style={{ width: "5rem", paddingRight: "3rem" }}
                    className="adminTabel__tbody__tr__td"
                  >
                    <Input
                      defaultValue={data.quantity}
                      className="stock"
                      onChange={(e) => {
                        setInputValue({
                          ...inputValue,
                          quantity: e.target.value,
                          id: data.id,
                        });
                      }}
                      onBlur={() => setStockList([...stockList, inputValue])}
                    />
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
