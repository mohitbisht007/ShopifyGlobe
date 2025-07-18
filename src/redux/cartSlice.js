import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../utils/localStorage";

const initialState = loadFromLocalStorage() || {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((p) => p.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },

    removeSingleItem: (state, action) => {
        const id = action.payload;
        const existingItem = state.cart.find((p) => p.id === id);
        if(existingItem.quantity > 1){
            existingItem.quantity -= 1
        } else {
           state.cart = state.cart.filter(p => p.id !== id)
        }
    },

    removeItem : (state,action) => {
      const id = action.payload;
      state.cart = state.cart.filter(p => p.id !== id)
    },

    clearCart : (state) => {
      state.cart.length = 0
    }
  },
});

export default cartSlice.reducer;
export const { addItems, removeItem, removeSingleItem, clearCart } = cartSlice.actions;
