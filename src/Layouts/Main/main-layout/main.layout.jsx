import { HeadingTitle, ProductsList, Separator, Toolbar } from "Components";
import { BsLaptop, BsXbox } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import "../../../Assets/Styles/Layout/MainUser/index.scss";

export const MainLayout = () => {
  return (
    <main className="main ">
      <Separator
        img="https://www.uplooder.net/img/image/87/746bb312a87a5fe53e0edb5a7ed95f20/2db150d462088e95bcb9dcd2f31742409b5a8117-1674631788.jpg"
        titleFa="لپ تاپ "
        titleEn="Laptops"
        icon={<BsLaptop style={{ fontSize: "1.5rem", color: "#EF3A4F" }} />}
      />
      <ProductsList />

      <Separator
        img="https://www.uplooder.net/img/image/83/1f892eeca4b1b373a27dcc03c0ee5857/822172e5b87c21b201cb03198ca83d051409996d-1677824539.jpg"
        titleFa="موبایل"
        titleEn="Mobile"
        icon={<CiMobile3 style={{ fontSize: "1.5rem", color: "#EF3A4F" }} />}
      />
      <ProductsList />
      <Separator
        img="https://www.uplooder.net/img/image/32/4df2927688cedac71b03c98529b3b61e/6a45272b7e841c93f80c3c075ed210db4288180f-1677415939-(1).jpg"
        titleFa="هدفون و هنذفری"
        titleEn="Headphone & Handsfree "
        icon={
          <TfiHeadphoneAlt style={{ fontSize: "1.5rem", color: "#EF3A4F" }} />
        }
      />

      <ProductsList />
      <Separator
        img="https://www.uplooder.net/img/image/12/6186aa44c92b13f835d5e0249bb8e625/2کنسول.jpg"
        titleFa="کنسول بازی ایکس باس"
        titleEn=" XBOX"
        icon={<BsXbox style={{ fontSize: "1.5rem", color: "#EF3A4F" }} />}
      />
      <ProductsList />
      <Toolbar/>
    </main>
  );
};
