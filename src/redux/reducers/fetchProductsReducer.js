import { createSlice } from '@reduxjs/toolkit'
import { getProductsAsync } from '../actions/product';


const initialState = {
    loading: false,
    error: null,
    products: []
}

export const getProductsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [getProductsAsync.pending]: (state) => {
            state.loading = true;
        },
        [getProductsAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getProductsAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.products = payload;
        }
    }
})


export default getProductsSlice.reducer