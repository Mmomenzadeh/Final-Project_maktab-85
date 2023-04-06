import { Route, Routes } from "react-router-dom";
import { PaymentFaild } from "./Payment-Failed/PaymentFaild.pages";
import { PaymentSuccess } from "./Payment-Success/PaymentSuccess.pages";
import { Payment } from "./Payment/Payment.pages";

export  function PaymentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Payment/>} />
      
      <Route path="payment-success" element={<PaymentSuccess/>} />
      <Route path="payment-failed" element={<PaymentFaild/>} />

    </Routes>
  );
}
