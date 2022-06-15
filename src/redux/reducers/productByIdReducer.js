import { createSlice } from '@reduxjs/toolkit'
import { getProductByIdAsync } from '../actions/product';


const initialState = {
    loading: false,
    error: null,
    product: {}
}



export const productByIdSlice = createSlice({
    name: 'productById',
    initialState,
    extraReducers: {
        [getProductByIdAsync.pending]: (state) => {
            state.loading = true;
        },
        [getProductByIdAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getProductByIdAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.product = payload;
        }
    }
})


export default productByIdSlice.reducer