import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProduct } from "API";

export const fetchProducts = createAsyncThunk("fetch/productList", async () => {
  try {
    const res = await GetProduct();
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

const ProductSlice = createSlice({
  name: "productList",
  initialState: {
    productData: [],
    loading: "idle",
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return {
        ...state,
        productData: action.payload,
        loading: false,
      };
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      return { ...state , error: "some thing wrong", productData: [], loading: "idel" };
    });
  },
});


export default ProductSlice.reducer
