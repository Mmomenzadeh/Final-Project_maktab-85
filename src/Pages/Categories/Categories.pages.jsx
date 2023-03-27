import { BannerHorizontal, CategorasMenu, ProductsList } from "Components";
import { Footer, Header } from "Layouts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductCategory } from "Redux/Slices/ProductCategorySlice";
import { fetchFilterData } from "Redux/Slices/ProductSlice";
import "../../Assets/Styles/Pages/Categories/index.scss";

export const Categories = () => {
  const { id } = useParams();
  const { categoryData } = useSelector((state) => state.category);
  const { productData } = useSelector((state) => state.products);

  console.log(productData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCategory());
    dispatch(fetchFilterData(`products?category=${id}`))
  }, [dispatch , id]);

  const categoryImg = [];
  const categoryTxt = [];
  const categoryStyle = [];

  for (const item of categoryData) {
    if (item.id === id) {
      item.banner.map((i) => {
        categoryImg.push(i.img);
        categoryTxt.push(i.txt);
        categoryStyle.push(i.filter);
      });
    }
  }


  return (
    <div className="categoriePage">
      <Header />
      <div className="categoriePage__main">
        <div className="flex gap-3">
          <CategorasMenu />
          <div className="categoriePage__main__banner">
            {/* large */}
            <div className="flex gap-3 j-c">
              <BannerHorizontal
                img={`http://localhost:3002/files/${categoryImg[0]}`}
                size="large"
              />

              <BannerHorizontal
                img={`http://localhost:3002/files/${categoryImg[1]}`}
                size="large"
              />
            </div>

            {/* small */}
            <div className="flex gap-2">
              <BannerHorizontal
                img={`http://localhost:3002/files/${categoryImg[2]}`}
                // txt=" لپتاپ لنوو Legion 5؛ تقریبا بی‌نقص، اما گران‌قیمت"
                size="small"
                // className="filter"
              />
              <BannerHorizontal
                img={`http://localhost:3002/files/${categoryImg[3]}`}
                size="small"
                // txt=" هدفون بی‌سیم سامسونگ;صدای خوب و دیگر هیچ"
                // className="filter"
              />
              <BannerHorizontal
                img={`http://localhost:3002/files/${categoryImg[4]}`}
                size="small"
                // txt="خرید دسته‌ بازی سونی; جذاب ولی گران‌قیمت"
              />
            </div>
          </div>
        </div>
        <div className="fs-1 mt-8 mb-1 gray-300 flex gap-2">
          <span className="">پرفروش ترین</span>
          <span className="">گران ترین </span>
          <span className="">ارزان ترین </span>
          <span className="">جدیدترین</span>
          <span className="">پر بازدیدترین</span>
        </div>
        <div className="line "></div>
        {/* product card part */}
        <div className="">
          <ProductsList productData={productData} />
     
        </div>
      </div>
      <Footer />
    </div>
  );
};
