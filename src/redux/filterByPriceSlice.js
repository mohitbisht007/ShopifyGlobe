import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    under50: false,
    between50_100: false,
    between100_1000: false,
    above1000: false,
 }

const filterByPriceSlice = createSlice({
    name: "filterByPrices",
    initialState,
 reducers: {
    toggleUnder50 : (state) => {
        state.under50 = !state.under50
    },

    toggleBetween50_100 : (state) => {
        state.between50_100 = !state.between50_100
    },

    toggleBetween100_1000 : (state) => {
        state.between100_1000 = !state.between100_1000
    },

    toggleAbove1000 : (state) => {
        state.above1000 = !state.above1000
    }
 }
  
})

export default filterByPriceSlice.reducer
export const {toggleUnder50, toggleBetween50_100, toggleBetween100_1000, toggleAbove1000} = filterByPriceSlice.actions