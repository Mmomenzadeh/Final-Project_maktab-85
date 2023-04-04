import { Button, Input } from "Components";
import { SlBasket, SlWallet } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../Assets/Styles/Pages/Checkout/index.scss";
import { Calendar, CalendarProvider, DatePicker, TimePicker } from "zaman";
import { useForm } from "react-hook-form";
import { PostOrder } from "API";

export const Checkout = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cartShopping);
  const shippingCost = 100000;

  const totalPay = cartItems.reduce((total, product) => {
    return total + +product.price * product.QTY;
  }, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //////----------------------------------------------
  const navigation = useNavigate();
  const paymentCode =Math.floor(Math.random()*1000000000) ;
  const onSubmit = (data) => {

    localStorage.setItem("order" , JSON.stringify({
      ...data,
      products: cartItems,
      delivered: false,
      prices: totalPay + shippingCost,
      paymentCode 
    }))
    navigation(`/payment-result/${paymentCode}`)


  
  };
  return (
    <div className="checkout">
      <div className="checkout__top ">
        <p className="fs-3 bolder primary ">Marvel Digist</p>
        <div className="flex a-c  gap-2 mt-5">
          <div className="fs-13 primary-T flex a-c gap ">
            <SlBasket size="2rem" />
            <span>سبد خرید</span>
          </div>

          <div className="line-small primary-T"></div>

          <div className="fs-13 primary flex a-c gap ">
            <TbTruckDelivery size="2.5rem" />
            <span className="fs-18"> زمان و مکان ارسال </span>
          </div>

          <div className="line-small gray-100"></div>

          <div className="fs-13 gray-150 flex a-c gap ">
            <SlWallet size="2rem" />
            <span> پرداخت</span>
          </div>
        </div>
      </div>
      <form className="flex gap-1 mt-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="checkout__main">
          <div className="flex wrap gap-3">
            <div className="flex col gap">
              <label className="fs-1 gray-300 mr-1">نام :</label>
              <Input
                className="checkOut"
                type="text"
                validate={{
                  ...register("username", {
                    required: "وارد کردن  نام الزامی ست ",
                  }),
                }}
              />
              {errors.username && (
                <p className="error">{errors.username.message}</p>
              )}
            </div>
            <div className="flex col gap">
              <label className="fs-1 gray-300 mr-1"> نام خانوادگی : </label>
              <Input
                className="checkOut"
                type="text"
                validate={{
                  ...register("lastname", {
                    required: "وارد کردن  نام خانوداگی الزامی ست ",
                  }),
                }}
              />
              {errors.lastname && (
                <p className="error">{errors.lastname.message}</p>
              )}
            </div>
            <div className="flex col gap">
              <label className="fs-1 gray-300 mr-1">تلقن همراه :</label>
              <Input
                className="checkOut"
                type="number"
                validate={{
                  ...register("phone", {
                    required: "وارد کردن  شماره تلفن همراه الزامی ست ",
                  }),
                }}
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </div>
            <div className="flex col gap">
              <label className="fs-1 gray-300 mr-1">تاریخ تحویل :</label>
              <DatePicker round="x4"  />
              {/* <DatePicker round="x2" accentColor="#6374ae" range />   */}
            </div>
            <div className="flex col gap">
              <label className="fs-1 gray-300 mr-1">ادرس :</label>
              <textarea
                className="textarea"
                cols="99"
                rows="5"
                {...register("address", {
                  required: "وارد کردن ادرس الزامی ست ",
                })}
              ></textarea>
              {errors.address && (
                <p className="error">{errors.address.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="checkout__side">
          <div className="flex j-sb">
            <p className="fs-11 gray-300">قیمت کالا ها ({cartItems.length})</p>
            <p className="fs-11 gray-300 flex gap ">
              {cartItems &&
                cartItems
                  .reduce((total, product) => {
                    return total + +product.price * product.QTY;
                  }, 0)
                  .toLocaleString()}

              <span style={{ color: "var(--primary)" }}>تومان</span>
            </p>
          </div>

          <div className="flex j-sb">
            <p className="fs-11 gray-300">
              {" "}
              هزینه ی ارسال{" "}
              <span className="badge-blue"> {cartItems.length}مرسوله</span>{" "}
            </p>
            <p className="fs-11 gray-300 flex gap">
              {shippingCost.toLocaleString()}
              <span style={{ color: "var(--primary)" }}>تومان</span>
            </p>
          </div>

          <div className="flex j-sb">
            <p className="fs-11 gray-300"> مبلغ قابل پرداخت </p>
            <p className="fs-11 gray-300 flex gap ">
              {(totalPay + shippingCost).toLocaleString()}

              <span style={{ color: "var(--primary)" }}>تومان</span>
            </p>
          </div>

          <Button className="checkOutBtn">پرداخت</Button>
        </div>
      </form>
    </div>
  );
};

// <Button  onSubmit={handleSubmit(onSubmit)}>

// </Button>
