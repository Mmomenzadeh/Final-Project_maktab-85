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
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="AllProduc" element={<AllProducts />} />
      <Route path="BasketShopping" element={<BasketShopping />} />
      <Route path="SingleProduct" element={<SingleProduct />} />
      <Route path="PanleManagement" element={<PanleManagement />} />
      <Route path="Payment" element={<Payment />} />
      <Route path="Orders" element={<Orders />} />
      <Route path="NotFound" element={<NotFound />} />
      <Route path="Login" element={<LogIn />} />
      <Route path="ContactUs" element={<ContactUs />} />
      <Route path="Checkout" element={<Checkout />} />
    </Routes>
  );
};
