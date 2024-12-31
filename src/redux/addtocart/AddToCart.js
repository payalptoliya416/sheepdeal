import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItem.find(item => item.id === newItem.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.cartItem.push({ ...newItem, quantity: 1 });
            }
          },
          removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItem = state.cartItem.filter(item => item.id !== itemId);},
          incrementQuantity: (state, action) => {
            const itemId = action.payload;
            const itemToIncrement = state.cartItem.find(item => item.id === itemId);
            if (itemToIncrement) {
              itemToIncrement.quantity += 1;
            }
          },
          decrement(state,action){
            state.cartItem = state.cartItem.map(item => {
                if(item.id === action.payload){
                    item.quantity--
                }
                return item;
            }).filter(item=>item.quantity !== 0 )
        },
    }
})

export default cartSlice.reducer;
export const {addToCart,increment,decrement,removeToCart} = cartSlice.actions;