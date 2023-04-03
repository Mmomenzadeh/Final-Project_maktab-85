import { useDispatch } from "react-redux";
import { INCERMENT } from "Redux/Slices/CartShoppingSlice";

export const IncermentQTY = (product) => {
    const dispatch = useDispatch();
   dispatch(INCERMENT(product));
};
