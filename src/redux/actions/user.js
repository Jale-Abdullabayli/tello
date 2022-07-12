import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { commerce } from '../../commerce';

export const registerActionAsync = createAsyncThunk(
    'user/registerActionAsync',
    async ({ email, phone, firstname, lastname }) => {
        try {
            const url = new URL(
                "https://api.chec.io/v1/customers"
            );

            let headers = {
                "X-Authorization": "sk_438530181fae7ea86973658aa89762b207a600b71d814",
                "Content-Type": "application/json",
                "Accept": "application/json",
            };

            let body = {
                "email": email,
                "phone": phone,
                "firstname": firstname,
                "lastname": lastname
            }

            const response = await axios.post(url, body, { headers: headers });
            console.log(response.data)
            return response.data;
        }
        catch (err) {
            return err.message
        }
    }
)

export const loginActionAsync = createAsyncThunk(
    'user/loginActionAsync',
    async ({ email }) => {
        try {

            const url = new URL(
                "https://api.chec.io/v1/customers/email-token"
            );

            let headers = {
                "X-Authorization": "sk_438530181fae7ea86973658aa89762b207a600b71d814",
                "Content-Type": "application/json",
                "Accept": "application/json",
            };

            let body = {
                "email": email,
                "base_url": "http://localhost:3000/generate-token"
            }

            const response = await axios.post(url, body, { headers: headers });
            return response.data;
        }
        catch (err) {
            return err.message
        }
    }
)

export const getUserAsync = createAsyncThunk(
    'user/getUserAsync',
    async () => {
        try {
            const response = await commerce.customer.about();
            console.log(response)
            return response;
        }
        catch (err) {
            return err.message
        }
    }
)

export const updateUserAsync = createAsyncThunk(
    'user/updateUserAsync',
    async ({firstname,lastname,email,phone,id}) => {
        try {
            const response = await commerce.customer.update({
                email,
                firstname,
                lastname,
                external_id: '',
                phone
            }, id)
            return response;
        }
        catch (err) {
            return err.message
        }
    }
)