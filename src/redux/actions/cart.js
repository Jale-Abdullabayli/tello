import { createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from '../../commerce';

export const getCartAsync = createAsyncThunk(
    'cart/getCartAsync',
    async () => {
        try {
            const response = await commerce.cart.retrieve();
            return response;
        }
        catch (err) {
            return err.message
        }
    }
)

export const addToCartAsync = createAsyncThunk(
    'cart/addToCartAsync',
    async ({ productId, basketCount, sizeGroupId, sizeVariantId, colorGroupId, colorVariantId }) => {
        try {
            const variantObj = {};
            variantObj[sizeGroupId] = sizeVariantId;
            variantObj[colorGroupId] = colorVariantId;
            const response = await commerce.cart.add(productId, basketCount, variantObj);
            return response.cart;
        }
        catch (err) {
            return err.message
        }
    }
)


export const updateCartAsync = createAsyncThunk(
    'cart/updateCartAsync',
    async ({ productId, basketCount }) => {
        try {
            const response = await commerce.cart.update(productId, { quantity: basketCount });
            return response.cart;
        }
        catch (err) {
            return err.message
        }
    }
)

export const removeFromCartAsync = createAsyncThunk(
    'cart/removeFromAsync',
    async (productId) => {
        try {
            const response = await commerce.cart.remove(productId);
            return response.cart;
        }
        catch (err) {
            return err.message
        }
    }
)

export const clearCartAsync = createAsyncThunk(
    'cart/clearCartAsync',
    async () => {
        try {
            const response = await commerce.cart.empty();
            return response.cart;
        }
        catch (err) {
            return err.message
        }
    }
)