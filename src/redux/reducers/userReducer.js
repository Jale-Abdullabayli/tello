import { createSlice } from '@reduxjs/toolkit'
import { getUserAsync } from '../actions/user';

const initialState = {
    loading: false,
    error: null,
    user: {}
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [getUserAsync.pending]: (state) => {
            state.loading = true;
        },
        [getUserAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getUserAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = payload;
        }
    }
})

export default userSlice.reducer