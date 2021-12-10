import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    value: null
}

export const productModalSlice = createSlice ({
    name: 'productModal',
    initalState,
    reducers: {
       set: (state, action) =>{
           state.value = action.payload
       },
       remove: (state) => {
           state.value = null
       }
    }
})

export const {set, remove } = productModalSlice.actions

export default productModalSlice.reducer