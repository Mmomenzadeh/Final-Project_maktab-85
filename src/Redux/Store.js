import { configureStore } from "@reduxjs/toolkit";
import OrdersSlice from "./Slices/OrdersSlice";
import ProductCategorySlice from "./Slices/ProductCategorySlice";
import ProductSlice from "./Slices/ProductSlice";

export const Store = configureStore({
    reducer : {
        products : ProductSlice ,
        category : ProductCategorySlice ,
        orders : OrdersSlice,
    }
})