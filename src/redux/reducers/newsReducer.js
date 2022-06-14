import { createSlice } from '@reduxjs/toolkit'
import { getNewsAsync } from '../actions/product';


const initialState = {
    loading: false,
    error: null,
    products: []
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: {
        [getNewsAsync.pending]: (state) => {
            state.loading = true;
        },
        [getNewsAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getNewsAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.products = payload;
        }
    }
})


export default newsSlice.reducer