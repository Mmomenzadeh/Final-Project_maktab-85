import { BannerVertical } from "./BannerVertical/BannerVertical.components";
import DualSense from "../../Assets/Images/Banner/DualSense.jpg";
import gamingLaptop from "../../Assets/Images/Banner/laptop2.jpg";
import headphone2 from "../../Assets/Images/Banner/headphone2.jpg";
import headphone5 from "../../Assets/Images/Banner/headphone5.png";

import "../../Assets/Styles/Components/Banner/index.scss";
import { BannerSmall } from "./BannerSmall/BannerSmall.components";
import { Slider } from "Components";

export const Banner = () => {
  return (
    <div className="Banner">
      <Slider />

      <div className="flex col gap-1">
        <BannerSmall
          img={`https://www.globalvillagespace.com/wp-content/uploads/2022/06/Samsung-about-to-launch-Galaxy-Z-Flip-4-1068x561.jpg`}
          txt="با 30 درصد تخفیف خریداری کنید !"
          link="سبک جدید گوشی های ساموسنگ "
        />

        <BannerSmall
          img={`http://sahebkhabar.ir/hermes/zoomit/zoomit-381585.jpg?ts=1651246648000`}
          txt="با 20 درصد تخفیف خریداری کنید !"
          link="تجربه ی متفاوت بازی با سبک جدید دسته های سونی  "
          className="fs"
        />
      </div>
      <BannerVertical
        name="       لپ تاپ های گیمینگ 2023"
        img={`https://helios-i.mashable.com/imagery/reviews/02X2Et9XTr1SlmoCtZiCRcV/hero-image.fill.size_1200x1200.v1619019588.jpg`}
        heading="خرید با 30 درصد تخفیف "
        btnTxt="الان بخرید "
      />
    </div>
  );
};
