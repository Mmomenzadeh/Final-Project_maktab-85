import { Button } from "Components";
import { HiOutlineShoppingCart } from "react-icons/hi";

import "../../Assets/Styles/Components/Banner/index.scss";
export const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-container__banner">
        <img
          className="banner__img banner__img--first "
          src="https://pre-websites.ir/elementor/digital/wp-content/uploads/2022/01/banner1.jpg"
          alt=""
        />
        <p className="banner-container__banner__heading--first">
          پر فروش ترین سری جدید هدفون
        </p>
        <span className="banner-container__banner__text--first">
          با جدیدترین و بهترین ها همراه شوید ...
        </span>
        <div className="banner-container__banner__btn--first">
          <Button size="medium" text="بیشتر بدانید" style="outline" />
        </div>
      </div>

      <div className="banner-container__banner__middle">
        <div className="banner-container__banner">
          <img
            className="banner__img  banner__img--middle"
            src="https://pre-websites.ir/elementor/digital/wp-content/uploads/2022/01/banner2.jpg"
            alt=""
          />

          <p className="banner_middle__heading--first ">
            سبک جدید اسپیکر های بلوتوث
          </p>
          <span className="banner_middle__txt--first">
            با 20 درصد تخفیف خریداری کنید !
          </span>
        </div>

        <div className="banner-container__banner">
          <img
            className="banner__img banner__img--middle"
            src="https://pre-websites.ir/elementor/digital/wp-content/uploads/2022/01/banner3.jpg"
            alt=""
          />
          <p className="banner_middle__heading--last">
            سبک جدید دوربین های فیلمبرداری
          </p>

          <span className="banner_middle__txt--last">
            با 30 درصد تخفیف خریداری کنید !
          </span>
        </div>
      </div>

      <div className="banner-container__banner">
        <img
          className="banner__img banner__img--last"
          src="https://pre-websites.ir/elementor/digital/wp-content/uploads/2022/01/img-45.jpg"
          alt=""
        />
        <span className="banner-container__banner__text--last">
          دسته ایکس باکس بی سیم
        </span>
        <p className="banner-container__banner__heading--last">
          خرید با 50 درصد تخفیف
        </p>
        <div className="banner-container__banner__btn--last">
          <div className="banner-btn">
            <HiOutlineShoppingCart className="banner-btn__icon" />
            <Button size="medium" text="الان بخرید " style="outline" />
          </div>
        </div>
      </div>
    </div>
  );
};
