import { AddQuantityBox, Button, Input } from "Components";
import { Footer, Header } from "Layouts";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import "../../Assets/Styles/Pages/BasketShopping/index.scss";

export const BasketShopping = () => {
  return (
    <div>
      <Header />

      <div className="BasketShopping flex gap j-c">
       
        <div className="BasketShopping__orderList">
          <div className="BasketShopping__orderList__item">
            <div className="BasketShopping__orderList__item__img">
              <img src="" alt="" />
            </div>
            <div className="BasketShopping__orderList__item__content">
              <div className=""></div>
              <div className="lin"></div>
              <div className="flex j-sb">
                <p className="">
                  1258955 <span style={{color:"var(--primary)"}}>تومان</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="BasketShopping__checkOutBox">
          <div className="flex j-sb">
            <p className="fs-11 gray-300">قیمت کالا ها </p>
            <p className="fs-11 gray-300">222</p>
          </div>

          <div className="flex j-sb">
            <p className="fs-11 gray-300">جمع سبد خرید </p>
            <p className="fs-11 gray-300">222</p>
          </div>

          <Button className="orderBtn">ثبت سفارش</Button>
          <div className="flex j-sb">
            <p className="fs-11 gray-300">سبد خرید شما </p>
            <p className="fs-11 gray-300">2 کالا</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
