import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './FormSlice.js';

const store = configureStore({
    reducer: {
        recipes: recipeReducer,
    },
})
export default store;