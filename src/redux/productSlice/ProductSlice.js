import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
  categories: [],
  selectedCategory: null,
  error: null,
  productId: null,
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data.products;
});

export const fetchProductsID = createAsyncThunk(
  "productId/fetch",
  async (productId) => {
    const response = await axios.get(`https://dummyjson.com/products/${productId}`);
    return response.data;
  }
);

export const fetchCategories = createAsyncThunk("categories/fetch", async () => {
  const response = await axios.get("https://dummyjson.com/products/categories");
  return response.data;
});

export const fetchCategoryProducts = createAsyncThunk(
  'categories/products/fetch',
  async (categoryId) => {
    const response = await axios.get(`https://dummyjson.com/products/category/${categoryId}`);
    return response.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
export const { setSelectedCategory } = productSlice.actions;
