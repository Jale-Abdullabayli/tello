import { configureStore } from '@reduxjs/toolkit'
import topSellingsReducer from './reducers/topSellingsReducer';
import newsReducer from './reducers/newsReducer';
import accessoriesReducer from './reducers/accessoriesReducer';
import productsByCategoryReducer from './reducers/productsByCategoryReducer';
import menuShowReducer from './reducers/menuShowReducer';
import productByIdReducer from './reducers/productByIdReducer';
import fetchCartReducer from './reducers/fetchCartReducer';
import filterReducer from './reducers/filterReducer';
import userReducer from './reducers/userReducer';
import fetchProductsReducer from './reducers/fetchProductsReducer';

export const store = configureStore({
    reducer: {
        topSellings: topSellingsReducer,
        news: newsReducer,
        accessories: accessoriesReducer,
        productsByCategory: productsByCategoryReducer,
        menuShow: menuShowReducer,
        productById:productByIdReducer,
        cart: fetchCartReducer,
        filter:filterReducer,
        user: userReducer,
        products: fetchProductsReducer
    },
})