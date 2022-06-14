import { createSlice } from '@reduxjs/toolkit'
import { getTopSellingsAsync } from '../actions/product';


const initialState = {
    loading: false,
    error: null,
    products: []
}

export const topSellingsSlice = createSlice({
    name: 'topSellings',
    initialState,
    extraReducers: {
        [getTopSellingsAsync.pending]: (state) => {
            state.loading = true;
        },
        [getTopSellingsAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getTopSellingsAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.products = payload;
        }
    }
})


export default topSellingsSlice.reducer