import { createSlice } from '@reduxjs/toolkit'
import { getCartAsync } from '../actions/cart';
import { addToCartAsync, clearCartAsync, updateCartAsync, removeFromCartAsync } from '../actions/cart';



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
        [addToCartAsync.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [addToCartAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [addToCartAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.cart = payload;
        },
        [removeFromCartAsync.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [removeFromCartAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [removeFromCartAsync.fulfilled]: (state, { payload }) => {
            state.cart = payload;
            state.loading = false;
        },
        [updateCartAsync.pending]: (state, { payload }) => {
            state.loading = true;
        }
        ,
        [updateCartAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        }
        ,
        [updateCartAsync.fulfilled]: (state, { payload }) => {
            state.cart = payload;
            state.loading = false;
        }
        ,
        [clearCartAsync.pending]: (state, { payload }) => {
            state.loading = true;
        }
        ,
        [clearCartAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        }
        ,
        [clearCartAsync.fulfilled]: (state, { payload }) => {
            state.cart = payload;
            state.loading = false;
        }
    }
})


export default cartSlice.reducer