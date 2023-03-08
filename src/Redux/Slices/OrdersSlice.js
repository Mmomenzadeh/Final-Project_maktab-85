import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetOrders } from "API";

export const fetchOrders = createAsyncThunk("fetch/ordersList", async () => {
  try {
    const res = await GetOrders();
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

const OrderSlice = createSlice({
  name: "ordersList",
  initialState: {
    ordersData: [],
    loading: "idle",
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });

    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      return {
        ...state,
        ordersData: action.payload,
        loading: false,
      };
    });

    builder.addCase(fetchOrders.rejected, (state) => {
      return {
        ...state,
        error: "something went wrong",
        loading: "idel",
        ordersData: [],
      };
    });
  },
});


export default OrderSlice.reducer