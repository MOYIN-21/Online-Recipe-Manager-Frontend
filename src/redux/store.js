import { configureStore } from '@reduxjs/toolkit';
import recipeSlice from "../redux/FormSlice.js"
const store = configureStore({
    reducer: {
        recipe: recipeSlice,
    },
})
export default store;