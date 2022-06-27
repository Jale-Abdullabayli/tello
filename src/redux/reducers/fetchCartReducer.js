import { createSlice } from '@reduxjs/toolkit'
import { getCartAsync } from '../actions/cart';
import { addToCartAsync,updateCartAsync,removeFromCartAsync } from '../actions/cart';



const initialState = {
    loading: false,
    error: null,
    cart: {}
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: {
        [getCartAsync.pending]: (state) => {
            state.loading = true;
        },
        [getCartAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getCartAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.cart = payload;
        },
        [addToCartAsync.fulfilled]: (state, { payload }) => {
            state.cart = payload;
        },
        [removeFromCartAsync.fulfilled]: (state, { payload }) => {
            state.cart = payload;
        },
        [updateCartAsync.fulfilled]: (state, { payload }) => {
            state.cart = payload;
        }
    }
})


export default cartSlice.reducer