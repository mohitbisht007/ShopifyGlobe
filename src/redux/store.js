import { configureStore } from "@reduxjs/toolkit"
import filterByPriceSlice from "./filterByPriceSlice"
import filtersByStockSlice from "./filterByStock"
import filterByRatingSlice from "./filterByRatings"
import cartSlice from "./cartSlice"
import { saveToLocalStorage } from "../utils/localStorage"

export const productStore = configureStore({
    reducer: {
        filtersByPrice : filterByPriceSlice,
        filterByStock : filtersByStockSlice,
        filterByRating: filterByRatingSlice,
        cart: cartSlice
    }
})

productStore.subscribe(() => {
    const state = productStore.getState();
    const cartState = state.cart;
    saveToLocalStorage(cartState)
})