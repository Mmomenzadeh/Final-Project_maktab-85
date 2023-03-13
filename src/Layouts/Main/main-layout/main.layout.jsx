import {
  Banner,
  HeadingTitle,
  ProductsList,
  Separator,
  Slider,
  Toolbar,
} from "Components";
import { BsLaptop, BsXbox } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import "../../../Assets/Styles/Layout/MainUser/index.scss";

export const MainLayout = () => {
  return (
    <main className="main ">
      <Banner />
      <HeadingTitle size="100rem" titleEn="Mobiles" titleFa="گوشی موبایل " />

      <HeadingTitle  size="106rem" titleEn="Laptops" titleFa=" لپ تاپ " />

      <HeadingTitle size="85rem" titleEn="HeadPhone & Handsfree" titleFa=" هدفون و هندزفری " />

      <HeadingTitle  size="98rem"titleEn="Console game" titleFa="کنسول بازی  " />
    </main>
  );
};
