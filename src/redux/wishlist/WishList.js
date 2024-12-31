import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      if (!state.items.some((item) => item.id === newItem.id)) {
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
        const dltItemId = action.payload.id;
        const updatedCart = state.items.filter(item => item.id !== dltItemId);
        return {
          ...state,
          items: updatedCart,
        };
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
