import { createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from '../../commerce';


export const getAllProductsAsync = createAsyncThunk(
    'allProducts/getAllProductsAsync',
    async () => {
        try {
            const response = await commerce.products.list();
            return response.data;

        }
        catch (err) {
            return err.message
        }
    }
)

export const getTopSellingsAsync = createAsyncThunk(
    'topSellings/getTopSellingsAsync',
    async () => {
        try {
            const response = await commerce.products.list({
                category_slug: ['ox-sat-lanlar'],
            })
            return response.data;

        }
        catch (err) {
            return err.message
        }
    }
)

export const getNewsAsync = createAsyncThunk(
    'news/getNewsAsync',
    async () => {
        try {
            const response = await commerce.products.list()
            return response.data.slice(-4);

        }
        catch (err) {
            return err.message
        }
    }
)


export const getAccessoriesAsync = createAsyncThunk(
    'accessories/getAccessoriesAsync',
    async () => {
        try {
            const response = await commerce.products.list({
                category_slug: ['aksesuarlar'],
            })
            return response.data;

        }
        catch (err) {
            return err.message
        }
    }
)


export const getProductsByCategoryAsync = createAsyncThunk(
    'productsByCategory/getProductsByCategoryAsync',
    async (param) => {
        try {
            const response = await commerce.products.list({
                category_slug: [param.category]
            })
            return response.data;

        }
        catch (err) {
            return err.message
        }
    }
)


export const getProductsAsync = createAsyncThunk(
    'products/getProductsAsync',
    async () => {
        try {
            const response = await commerce.products.list();
            return response.data;
        }
        catch (err) {
            return err.message
        }
    }
)

export const getProductByIdAsync = createAsyncThunk(
    'productById/getProductByIdAsync',
    async (productId) => {
        try {
            const response = await commerce.products.retrieve(productId);
            return response;
        }
        catch (err) {
            return err.message
        }
    }
)