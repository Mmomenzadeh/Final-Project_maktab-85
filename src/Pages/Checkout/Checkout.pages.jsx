import { SlBasket, SlWallet } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import "../../Assets/Styles/Pages/Checkout/index.scss";
export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__top ">
        <p className="fs-3 bolder primary ">Marvel Digist</p>
        <div className="flex a-c  gap-2 mt-5">
          <div className="fs-13 primary-T flex a-c gap ">
            <SlBasket size="2rem"/>
            <span>سبد خرید</span>
          </div>

          <div className="line-small primary-T"></div>

          <div className="fs-13 primary flex a-c gap ">
            <TbTruckDelivery size="2.5rem"/>
            <span className="fs-18"> زمان و مکان ارسال </span>
          </div>

          <div className="line-small gray-100"></div>


          <div className="fs-13 gray-150 flex a-c gap ">
            <SlWallet size="2rem"/>
            <span> پرداخت</span>
          </div>
        </div>
      </div>

      <div className="checkout__side">
        
      </div>
    </div>
  );
};
