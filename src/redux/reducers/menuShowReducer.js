import { createSlice } from '@reduxjs/toolkit'


const initialState = false;

export const menuShowSlice = createSlice({
    name: 'menuShow',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            return !state;
        }
    }
})

export const {toggleMenu} = menuShowSlice.actions;
export default menuShowSlice.reducer