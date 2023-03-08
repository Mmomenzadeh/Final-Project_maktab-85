import { Input } from "Components";
import { AdminHeader, AdminMain, SideBar } from "Layouts";
import { BsPlusSquare } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../Assets/Styles/Pages/ManagementPanle/index.scss";
import { fetchProducts } from "Redux/Slices/ProductSlice";
import { fetchProductCategory } from "Redux/Slices/ProductCategorySlice";

export const ManagementPanleProducts = () => {
  const { productData } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <div className="managementPanle">
      <div className="managementPanle__header">{/* <AdminHeader/> */}</div>

      <div className="managementPanle__main">
        <SideBar />
        <div className="flex col">
          <div className="managementPanle__main__header">
            <div className="flex gap-2">
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
                <label className="managementPanle__main__header__label">
                  {" "}
                  دسته بندی :
                </label>
                <select className="managementPanle__main__header__select">
                  <option value="">همه </option>
                </select>
              </div>
            </div>

            <BsPlusSquare className="managementPanle__main__header__icon" />
          </div>

          <AdminMain data={productData} status="product" />
        </div>
      </div>
    </div>
  );
};
