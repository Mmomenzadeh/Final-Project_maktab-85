import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProductCategory } from "../../Redux/Slices/ProductCategorySlice";
import "../../Assets/Styles/Components/CategorasMenu/index.scss";

export const CategorasMenu = () => {
  const { categoryData } = useSelector((state) => state.category);
  console.log(categoryData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCategory());
  }, [dispatch]);

  return (
    <div className="categorasMenu">
      {categoryData.map((item) => (
        <li key={item.id} className="categorasMenu__li">
          <NavLink
            to={`/category/${item.id}`}
            className={`categorasMenu__li__link`}
          >
            <img
              className="categorasMenu__li__link__img"
              src={`http://localhost:3002/files/${item.icon}`}
              alt={item.name}
            />
            <span className="">{item.name}</span>
          </NavLink>
          <ul className="categorasMenu__li__brands">
            {item.brands.map((brand) => (
              <li key={brand.id}>
                <NavLink className={`categorasMenu__li__brands__link`} to={`brand/${brand.id}`}>{brand.name_en}</NavLink>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </div>
  );
};
