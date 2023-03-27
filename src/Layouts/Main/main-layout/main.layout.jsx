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

      <div className="flex mt-5 j-c gap-10">
        <CategoryLogo
          img="https://www.uplooder.net/img/image/28/e9c0185f97325d9c786493ed93920793/icons8-discount-100.png"
          txt="تخفیف ها"
        />
        <CategoryLogo
          img="https://www.uplooder.net/img/image/68/fbe2269c813245f8014b2171aa2d9fc1/icons8-ereader-100.png"
          txt="وبلاگ"
        />
        {categoryData.map((item) => (
          <CategoryLogo key={item.id} txt={item.name} img={item.icon} categoryId={item.id} />
        ))}
        <CategoryLogo
          img="https://www.uplooder.net/img/image/20/c65ffa9e791bb9c86d1be881a7b5d575/icons8-vinyl-100.png"
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
        img="https://dkstatics-public.digikala.com/digikala-adservice-banners/5668dea95a68668f943d325aff14e34f7bf9c9e9_1673600968.jpg?x-oss-process=image/quality,q_95/format,webp"
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
