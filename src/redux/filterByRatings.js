import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    below3: false ,
    btw3to4: false,
    above4 : false,
}

const filterByRatingSlice = createSlice({
    name: "filterByRating",
    initialState,
    reducers:{ 
     togglebelow3: (state) => {
        state.below3 = !state.below3
     },

     togglebtw3to4: (state) => {
        state.btw3to4 = !state.btw3to4
     },

     toggleabove4: (state) => {
        state.above4 = !state.above4
     },
    
    }
})


export default filterByRatingSlice.reducer
export const {toggleabove4, togglebelow3, togglebtw3to4} = filterByRatingSlice.actions