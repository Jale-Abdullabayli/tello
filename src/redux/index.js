import { configureStore } from '@reduxjs/toolkit'
import topSellingsReducer from './reducers/topSellingsReducer';
import newsReducer from './reducers/newsReducer';
import accessoriesReducer from './reducers/accessoriesReducer';

export const store = configureStore({
    reducer: {
        topSellings: topSellingsReducer,
        news: newsReducer,
        accessories: accessoriesReducer
    },
  })