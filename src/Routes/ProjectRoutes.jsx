import { BLOG } from "Config";
import { ABOUT } from "Config";
import { BASKETSHOPPING } from "Config";
import { PANLEMANAGEMENT } from "Config";
import { ORDERS } from "Config";
import { LOGIN } from "Config";
import { CHECKOUT } from "Config";
import { CONTACTUS } from "Config";
import { NOTFOUND } from "Config";
import { PAYMENT } from "Config";
import { SINGLEPRODUCT } from "Config";
import { ALLPRODUCTS } from "Config";
import { HOME } from "Config";
import {
  About,
  AllProducts,
  BasketShopping,
  Blog,
  Checkout,
  ContactUs,
  Home,
  LogIn,
  NotFound,
  Orders,
  PanleManagement,
  Payment,
  SingleProduct,
} from "Pages";
import { Route, Routes } from "react-router-dom";

export const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={BLOG} element={<Blog />} />
      <Route path={ABOUT} element={<About />} />
      <Route path={ALLPRODUCTS} element={<AllProducts />} />
      <Route path={BASKETSHOPPING} element={<BasketShopping />} />
      <Route path={SINGLEPRODUCT} element={<SingleProduct />} />
      <Route path={PANLEMANAGEMENT} element={<PanleManagement />} />
      <Route path={PAYMENT} element={<Payment />} />
      <Route path={ORDERS} element={<Orders />} />
      <Route path={NOTFOUND} element={<NotFound />} />
      <Route path={LOGIN} element={<LogIn />} />
      <Route path={CONTACTUS} element={<ContactUs />} />
      <Route path={CHECKOUT} element={<Checkout />} />
    </Routes>
  );
};
