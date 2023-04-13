import { Loading } from "Components";
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
  LogIn,
  NotFound,
  Orders,
  Payment,
  PaymentFaild,
  PaymentSuccess,
  SingleProduct,
  UserAccount,
} from "Pages";
import {
  ManagementPanleOrders,
  ManagementPanleProducts,
  ManagementPanleStock,
} from "Pages/Panle-management";
import { useEffect } from "react";
import { Suspense, lazy } from "react";

import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { PrivetRoutes } from "./PrivetRoutes";
const Home = lazy(() => import("../Pages"));

export const ProjectRoutes = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/login" && localStorage.getItem("accessToken")) {
      navigate("/managementPanle");
    }
  }, [pathname]);

  return (
    <Routes>
      {/* private Route */}

      <Route element={<PrivetRoutes />}>
        <Route
          path="/managementPanle"
          element={
            <Suspense fallback={<Loading type="ripple" />}>
              <AdminMain />
            </Suspense>
          }
        >
          <Route index element={<ManagementPanleOrders />} />
          <Route path="products" element={<ManagementPanleProducts />} />
          <Route path="stock" element={<ManagementPanleStock />} />
        </Route>

        <Route path="/basketShopping" element={<BasketShopping />} />

        <Route
          path={`/checkout`}
          element={
            <Suspense fallback={<Loading type="ripple" />}>
              <Checkout />
            </Suspense>
          }
        />

        <Route
          path={`/payment-result`}
          element={
            <Suspense fallback={<Loading type="ripple" />}>
              <Payment />
            </Suspense>
          }
        />
        <Route
          path="/payment-result/:paymentCode/payment-success"
          element={<PaymentSuccess />}
        />
        <Route
          path="/payment-result/:paymentCode/payment-failed"
          element={<PaymentFaild />}
        />

        <Route path={USERACCOUNT} element={<UserAccount />} />
      </Route>

      {/* Public Route */}

      <Route
        path={HOME}
        element={
          <Suspense fallback={<Loading type="ripple" />}>
            <Home />
          </Suspense>
        }
      />
      <Route path={BLOG} element={<Blog />} />
      <Route path={ABOUT} element={<About />} />
      <Route path={ALLPRODUCTS} element={<AllProducts />} />
      <Route
        path="/products/:id"
        element={
          <Suspense fallback={<Loading type="ripple" />}>
            <SingleProduct />
          </Suspense>
        }
      />

      <Route path={ORDERS} element={<Orders />} />
      <Route path={`*`} element={<NotFound />} />
      <Route
        path={LOGIN}
        element={
          <Suspense fallback={<Loading type="ripple" />}>
            <LogIn />
          </Suspense>
        }
      />
      <Route
        path={CONTACTUS}
        element={
          <Suspense fallback={<Loading type="ripple" />}>
            <ContactUs />
          </Suspense>
        }
      />

      <Route
        path="/category/:id"
        element={
          <Suspense fallback={<Loading type="ripple" />}>
            <Categories />
          </Suspense>
        }
      />
    </Routes>
  );
};
