import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inStock: false,
    lowStock: false,
}

const filterByStockSlice = createSlice({
    name: "filterByStock",
    initialState,
    reducers : {
        toggleInStock : (state) => {
            state.inStock = !state.inStock
        },

        toggleLowStock : (state) => {
            state.lowStock = !state.lowStock
        }
    }
})

export default filterByStockSlice.reducer
export const {toggleInStock, toggleLowStock} = filterByStockSlice.actions