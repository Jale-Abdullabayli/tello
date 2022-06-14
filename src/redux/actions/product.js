import { createAsyncThunk } from '@reduxjs/toolkit'
// import * as api from '../../api/https';
import { commerce } from '../../commerce';

export const getTopSellingsAsync = createAsyncThunk(
    'topSellings/getTopSellingsAsync',
    async () => {
        try {
            // const response = await api.getProducts();
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
            const response = await commerce.products.list({
                category_slug: ['yeni-m-hsullar', 'telefonlar'],
            })
            return response.data;

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
                category_slug:  ['aksesuarlar', 'yeni-m-hsullar'],
            })
            return response.data;

        }
        catch (err) {
            return err.message
        }
    }
)