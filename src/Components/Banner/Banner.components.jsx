import { BannerVertical } from "./BannerVertical/BannerVertical.components";
import DualSense from "../../Assets/Images/Banner/DualSense.jpg";
import camera from "../../Assets/Images/Banner/camera.jpg";
import speaker from "../../Assets/Images/Banner/speaker.jpg";
import buds2 from "../../Assets/Images/Banner/buds2.webp"
import "../../Assets/Styles/Components/Banner/index.scss"
import { BannerSmall } from "./BannerSmall/BannerSmall.components";
import { Slider } from "Components";
export const Banner = () => {
  return (
    <div className="Banner">

        <Slider/>

      <div className="flex col gap-1">
        <BannerSmall
          img={camera}
          txt="با 30 درصد تخفیف خریداری کنید !"
          link="سبک جدید دوربین های فیلمبرداری"
        />

        <BannerSmall
          img={speaker}
          txt="با 20 درصد تخفیف خریداری کنید !"
          link="سبک جدید اسپیکر های بلوتوث"
        />
      </div>
      <BannerVertical
        name="   دسته ایکس باکس بی سیم"
        img={DualSense}
        heading="خرید با 50 درصد تخفیف "
        btnTxt="الان بخرید "
      />
    </div>
  );
};
