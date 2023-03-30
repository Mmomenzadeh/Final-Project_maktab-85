import { EditeStockService } from "API";
import { Button, Input, Table } from "Components";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchFilterData, fetchProducts } from "Redux/Slices/ProductSlice";
import "../../../Assets/Styles/Pages/ManagementPanle/index.scss";

export const ManagementPanleStock = () => {
  ///----------------------------------state for change txt to input--------------------------
  const [inputMode, setInputMode] = useState({
    Pricestatus: false,
    QuantityStatus: false,
    Priceid: "",
    quantityId: "",
  });

  const [toggleBtn, setToggleBtn] = useState({ price: false, quantity: false });
  ///---------------------------------Input Value---------------------------------------------
  const [inputValue, setInputValue] = useState({});
  const [stockList, setStockList] = useState([]);
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
        setInputMode({ Pricestatus: false, QuantityStatus: false });
        setToggleBtn({ price: false, quantity: false });
        toast.success("تغییرات با موفقیت ثبت شد ")
      });
  };

  ////------------------------------searchBox------------------------------------------------

  const searchHandler = (queryString) => {};

  //--------------------------------------EscapeFunc-------------------------------------------
  const EscapeFunc = (e) => {
    let KEYCODE = e.keyCode;
    if (KEYCODE == 27) {
      setInputMode({ Pricestatus: false, QuantityStatus: false });
      setToggleBtn({ price: false, quantity: false });

    }
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
                holder={`${productData.length} رکورد ....`}
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
            onMouseDown={() => setStockList([...stockList, inputValue])}
            onClick={saveBtnHandler}
            className={
              toggleBtn.price === false && toggleBtn.quantity === false
                ? "disabled"
                : "nonDisabled"
            }
            disabled={!(toggleBtn.price || toggleBtn.quantity)}
          >
            {toggleBtn.price === false && toggleBtn.quantity === false
              ? "ویرایش موجودی / قیمت"
              : "ذخیره تغییرات موجودی / قیمت"}
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
                    style={{ width: "75rem" }}
                    className="adminTabel__tbody__tr__td "
                  >
                    {data.name}
                  </td>

                  <td
                    style={{ width: "15rem" }}
                    className="adminTabel__tbody__tr__td"
                  >
                    {inputMode.Pricestatus && inputMode.Priceid == data.id ? (
                      <Input
                        defaultValue={data.price ? data.price : 0}
                        holder="0"
                        className="stock"
                        onChange={(e) => {
                          setInputValue({
                            ...inputValue,
                            price: e.target.value,
                            id: data.id,
                          });
                          setToggleBtn({ price: true });
                        }}
                        onkeydown={(e) => EscapeFunc(e)}
                      />
                    ) : (
                      <p
                        style={{ width: "8rem" }}
                        onClick={() =>
                          setInputMode({ Pricestatus: true, Priceid: data.id })
                        }
                      >
                        {data.price}
                      </p>
                    )}
                  </td>
                  <td
                    style={{ width: "15rem", paddingRight: "3rem" }}
                    className="adminTabel__tbody__tr__td"
                  >
                    {inputMode.QuantityStatus &&
                    inputMode.quantityId == data.id ? (
                      <Input
                        defaultValue={data.quantity ? data.quantity : 0}
                        className="stock"
                        holder="0"
                        onChange={(e) => {
                          setInputValue({
                            ...inputValue,
                            quantity: e.target.value,
                            id: data.id,
                          });
                          setToggleBtn({ quantity: true });
                        }}
                        onkeydown={(e) => EscapeFunc(e)}
                      />
                    ) : (
                      <p
                        style={{ width: "8rem" }}
                        onClick={() =>
                          setInputMode({
                            QuantityStatus: true,
                            quantityId: data.id,
                          })
                        }
                      >
                        {data.quantity}
                      </p>
                    )}
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
