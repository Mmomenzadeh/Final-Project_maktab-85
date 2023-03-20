import { Banner, HeadingTitle, ProductsList } from "Components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "Redux/Slices/ProductSlice";
import "../../../Assets/Styles/Layout/MainUser/index.scss";

export const MainLayout = () => {
  const { productData } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const mobiles = productData.filter((item) => item.category === "1");
  const laptops = productData.filter((item) => item.category === "2");
  const headPhones = productData.filter((item) => item.category === "3");
  const console = productData.filter((item) => item.category === "4");
  return (
    <main className="main ">
      <Banner />
      <HeadingTitle categoeyId="1" size="115rem" titleEn="Mobiles" titleFa="گوشی موبایل " />
      <ProductsList productData={mobiles} />
      <HeadingTitle categoeyId="2" size="120rem" titleEn="Laptops" titleFa=" لپ تاپ " />
      <ProductsList productData={laptops} />

      <HeadingTitle
        categoeyId="3"
        size="100rem"
        titleEn="HeadPhone & Handsfree"
        titleFa=" هدفون و هندزفری "
      />
      <ProductsList productData={headPhones} />

      <HeadingTitle
        categoeyId="4"
        size="110rem"
        titleEn="Console game"
        titleFa="کنسول بازی  "
      />
      <ProductsList productData={console} />
    </main>
  );
};
