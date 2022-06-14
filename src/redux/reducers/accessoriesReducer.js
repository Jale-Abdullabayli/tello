import { createSlice } from '@reduxjs/toolkit'
import { getAccessoriesAsync } from '../actions/product';


const initialState = {
    loading: false,
    error: null,
    products: []
}

export const accessoriesSlice = createSlice({
    name: 'accessories',
    initialState,
    extraReducers: {
        [getAccessoriesAsync.pending]: (state) => {
            state.loading = true;
        },
        [getAccessoriesAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getAccessoriesAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.products = payload;
        }
    }
})


export default accessoriesSlice.reducer