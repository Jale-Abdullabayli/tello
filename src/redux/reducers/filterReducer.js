import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    color: [],
    size: []
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addToColorFilter: (state, { payload }) => {
            state[0].push(payload);
        },
        addToSizeFilter: (state, { payload }) => {
            state[1].push(payload);
        }
    }
})

export const { addToColorFilter, addToSizeFilter} = filterSlice.actions;
export default filterSlice.reducer