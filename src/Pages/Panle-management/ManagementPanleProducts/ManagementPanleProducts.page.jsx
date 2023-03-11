import { Button, Input, Pagination, Table } from "Components";
import { BsPlusSquare } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../Assets/Styles/Pages/ManagementPanle/index.scss";
import { fetchFilterData, fetchProducts } from "Redux/Slices/ProductSlice";
import { fetchProductCategory } from "Redux/Slices/ProductCategorySlice";
import { BASE_URL } from "Config";
import ReactPaginate from "react-paginate";

export const ManagementPanleProducts = () => {
  const [filterParams, setFilterParams] = useState("");
  const { productData } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    // dispatch(fetchFilterData(`products?_page=1&_limit=3`));
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
                className="managementPanle__table-header__select "
                name="category"
                value={filterParams}
                onChange={(e) => {
                  if (e.target.value ) {
                    dispatch(
                      fetchFilterData(`products?category=${e.target.value}`)
                    );
                    setFilterParams(e.target.value);
                  }else{

                    dispatch(
                      fetchFilterData(`products`)
                    );
                    setFilterParams(e.target.value);

                  }
               
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

          <BsPlusSquare className="managementPanle__table-header__icon" />
        </div>
        <Table>
          <thead>
            <tr className="thead__tr">
              <th>نام کالا</th>
              <th>دسته بندی </th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {/* میگذاریم currentItems بجایی دیتایی که از سمت سرور میگریم و میخوایم مپ بزنیم  */}
            {currentItems.map((data) => {
              return (
                <tr key={data.id} className="tbody__tr">
                  <td style={{ width: "55rem" }} className="td-productName">
                    <div className="td-productName__img-container ">
                      <img
                        className="td-productName__img"
                        src={`${BASE_URL}/files/${data.img[0]}`}
                        alt={data.name}
                      />
                    </div>
                    <div className="flex col gap-1">
                      <p className="td-productName__title">
                        {data.name.length > 30
                          ? data.name.substring(0, 35) + " ..."
                          : data.name}
                      </p>
                      <span className="td-productName__model">
                        {data.model.length > 25
                          ? data.model.substring(0, 25) + " ..."
                          : data.model}
                      </span>
                    </div>
                  </td>

                  <td style={{ width: "45rem" }}>
                    {data.category +
                      " / " +
                      data.subcategory +
                      " / " +
                      data.brand}
                  </td>
                  <td style={{ width: "10rem" }}>
                    <Button type="table-btn" outline="outline-blue">
                      ویرایش
                    </Button>
                  </td>
                  <td style={{ width: "10rem" }}>
                    <Button type="table-btn" outline="outline-red">
                      حذف
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <ReactPaginate
          breakLabel="..."
          nextLabel=" < next "
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
