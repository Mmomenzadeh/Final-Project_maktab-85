import { BLOG } from "Config";
import { ABOUT } from "Config";
import { BASKETSHOPPING } from "Config";
import { PANLEMANAGEMENT } from "Config";
import { ORDERS } from "Config";
import { LOGIN } from "Config";
import { CHECKOUT } from "Config";
import { CATEGORIES } from "Config";
import { USERACCOUNT } from "Config";
import { CONTACTUS } from "Config";
import { NOTFOUND } from "Config";
import { PAYMENT } from "Config";
import { SINGLEPRODUCT } from "Config";
import { ALLPRODUCTS } from "Config";
import { HOME } from "Config";
import { AdminMain } from "Layouts";
import {
  About,
  AllProducts,
  BasketShopping,
  Blog,
  Categories,
  Checkout,
  ContactUs,
  Home,
  LogIn,
  NotFound,
  Orders,
  Payment,
  RoutsManagementPanel,
  SingleProduct,
  UserAccount,
} from "Pages";
import {
  ManagementPanleOrders,
  ManagementPanleProducts,
  ManagementPanleStock,
} from "Pages/Panle-management";
import { Route, Routes } from "react-router-dom";

export const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={BLOG} element={<Blog />} />
      <Route path={ABOUT} element={<About />} />
      <Route path={ALLPRODUCTS} element={<AllProducts />} />
      <Route path="/basketShopping" element={<BasketShopping />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      {/* <Route path={PANLEMANAGEMENT} element={<RoutsManagementPanel/>} /> */}
      <Route path="/managementPanle" element={<AdminMain />}>
        <Route index element={<ManagementPanleOrders />} />
        <Route path="products" element={<ManagementPanleProducts />} />
        <Route path="stock" element={<ManagementPanleStock />} />
      </Route>
      <Route path={PAYMENT} element={<Payment />} />
      <Route path={ORDERS} element={<Orders />} />
      <Route path={NOTFOUND} element={<NotFound />} />
      <Route path={LOGIN} element={<LogIn />} />
      <Route path={CONTACTUS} element={<ContactUs />} />
      <Route path={`/checkout`} element={<Checkout />} />
      <Route path={USERACCOUNT} element={<UserAccount />} />
      <Route path="/category/:id" element={<Categories />} />
      
    </Routes>
  );
};
