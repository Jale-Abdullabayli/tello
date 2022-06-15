import { createSlice } from '@reduxjs/toolkit'
import { getProductsByCategoryAsync } from '../actions/product';


const initialState = {
    loading: false,
    error: null,
    products: []
}



export const productsByCategorySlice = createSlice({
    name: 'productsByCategory',
    initialState,
    extraReducers: {
        [getProductsByCategoryAsync.pending]: (state) => {
            state.loading = true;
        },
        [getProductsByCategoryAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getProductsByCategoryAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.products = payload;
        }
    }
})


export default productsByCategorySlice.reducer