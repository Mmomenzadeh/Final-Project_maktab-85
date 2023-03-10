import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FilterData, GetProduct } from "API";

export const fetchProducts = createAsyncThunk("fetch/productList", async () => {
  try {
    const res = await GetProduct();
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const fetchFilterData = createAsyncThunk(
  "filterData/productList",
  async (params) => {
    try {
      const res = await FilterData(params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);


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

    /// Filtering : 

    builder.addCase(fetchFilterData.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });

    builder.addCase(fetchFilterData.fulfilled, (state, action) => {
      return {
        ...state,
        productData: action.payload,
        loading: false,
      };
    });

    builder.addCase(fetchFilterData.rejected, (state) => {
      return {
        ...state,
        error: "something went wrong",
        productData: [],
        loading: false,
      };
    });


  },
});


export default ProductSlice.reducer
