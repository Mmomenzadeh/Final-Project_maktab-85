import {
  Banner,
  BannerHorizontal,
  CategoryLogo,
  HeadingTitle,
  ProductsList,
} from "Components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductCategory } from "Redux/Slices/ProductCategorySlice";
import { fetchProducts } from "Redux/Slices/ProductSlice";
import "../../../Assets/Styles/Layout/MainUser/index.scss";

export const MainLayout = () => {
  const { productData } = useSelector((state) => state.products);
  const { categoryData } = useSelector((state) => state.category);

  console.log(categoryData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductCategory());
  }, [dispatch]);

  const mobiles = productData.filter((item) => item.category === "1");
  const laptops = productData.filter((item) => item.category === "2");
  const headPhones = productData.filter((item) => item.category === "3");
  const consoleGame = productData.filter((item) => item.category === "4");
  return (
    <main className="main ">
      <Banner />

      <div className="flex mt-10 j-c gap-10">
        <CategoryLogo
          img="https://www.uplooder.net/img/image/44/de43a5ce0e6d888bf3834cebf72ee992/icons8-discount-100-(1).png"
          txt="تخفیف ها"
        />
        <CategoryLogo
          img="https://www.uplooder.net/img/image/74/e0ac1997526763abf1d1a5ad2cf9a829/icons8-ereader-100-(1).png"
          txt="وبلاگ"
        />
        {categoryData.map((item) => (
          <CategoryLogo
            key={item.id}
            txt={item.name}
            img={item.icon}
            categoryId={item.id}
          />
        ))}
        <CategoryLogo
        img="https://www.uplooder.net/img/image/38/71f30fea2f4abdf97bf583165f532bb7/icons8-vinyl-100-(1).png"
          txt="پادکست"
        />
      </div>
      <BannerHorizontal
        img="https://www.uplooder.net/img/image/24/318fe923043061fb62ada4804f71c8ac/822172e5b87c21b201cb03198ca83d051409996d-1677824539.jpg"
        size="full"
        className="space"
      />
      <HeadingTitle
        categoeyId="1"
        size="115rem"
        titleEn="Mobiles"
        titleFa="گوشی موبایل "
      />
      <ProductsList productData={mobiles} />

      <BannerHorizontal
        img="https://www.uplooder.net/img/image/50/935a3aebaeeb5d8f025da5550083c256/laptop-asus.gif"
        size="full"
        className="space"
      />
      <HeadingTitle
        categoeyId="2"
        size="120rem"
        titleEn="Laptops"
        titleFa=" لپ تاپ "
      />
      <ProductsList productData={laptops} />

      <BannerHorizontal
        img="https://www.uplooder.net/img/image/17/52ecc48c86d418c82b8754db5f23c6ee/6a45272b7e841c93f80c3c075ed210db4288180f-1677415939.jpg"
        size="full"
        className="space"
      />
      <HeadingTitle
        categoeyId="3"
        size="100rem"
        titleEn="HeadPhone & Handsfree"
        titleFa=" هدفون و هندزفری "
      />
      <ProductsList productData={headPhones} />

      <BannerHorizontal
        img="https://www.uplooder.net/img/image/11/cc0e73369bfb8de5565c2b03b09bc634/1667124027-POsELfLfZvo0a8Ke.jpg"
        size="full"
        className="space"
      />

      <HeadingTitle
        categoeyId="4"
        size="110rem"
        titleEn="Console game"
        titleFa="کنسول بازی  "
      />
      <ProductsList productData={consoleGame} />
    </main>
  );
};
