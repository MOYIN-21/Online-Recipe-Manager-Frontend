import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    createRecipe: [],
}

const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        setCreateRecipe(state, action) {
            // eslint-disable-next-line no-unused-vars
            const {name, description, ingredient, ...rest} = action.payload;
        }
    }
})

export const { setCreateRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
