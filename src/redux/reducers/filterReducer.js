import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    colors: [],
    sizes: []
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addToColorFilter: (state, { payload }) => {
            state.colors.push(payload);
        },
        addToSizeFilter: (state, { payload }) => {
            state.sizes.push(payload);
        },
        removeFromColorFilter: (state, { payload }) => {
            let index = state.colors.indexOf(payload);
            if (index > -1) {
                state.colors.splice(index, 1)
            }
        }
        ,
        removeFromSizeFilter: (state, { payload }) => {
            let index = state.sizes.indexOf(payload);
            if (index > -1) {
                state.sizes.splice(index, 1)
            }
        }
    }
})

export const { addToColorFilter, addToSizeFilter,removeFromSizeFilter,removeFromColorFilter } = filterSlice.actions;
export default filterSlice.reducer