import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipeName: "",
    description: "",
    ingredient: "",
    instruction: "",
    category: "",
    tag: "",
}

const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        setRecipeName: (state, action) => {
            state.recipeName = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setIngredient: (state, action) => {
            state.ingredient = action.payload;
        },
        setInstruction: (state, action) => {
            state.instruction = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setTag: (state, action) => {
            state.tag = action.payload; // Fixed typo here
        }
    }
})

export const { setRecipeName, setDescription, setIngredient, setInstruction, setCategory, setTag } = recipeSlice.actions;
export default recipeSlice.reducer;
