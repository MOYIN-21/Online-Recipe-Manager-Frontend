import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setDescription, setIngredient, setInstruction, setRecipeName, setTag } from "../redux/FormSlice.js";

const Create = () => {
    const dispatch = useDispatch();
    const [imageURL, setImageURL] = useState(null);
    const inpuRef = useRef();

    const handleDragOver = (event) => { event.preventDefault(); };
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setImageURL(URL.createObjectURL(file));
    };

    const handleCancel = () => {
        setImageURL(null);
    };

    const [formData, setFormData] = useState({
        recipeName: "",
        description: "",
        ingredient: "",
        instruction: "",
        category: "",
        tag: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch(setRecipeName(formData.recipeName));
        // dispatch(setDescription(formData.description));
        // dispatch(setInstruction(formData.instruction));
        // dispatch(setCategory(formData.category));
        // dispatch(setTag(formData.tag));
        // dispatch(setIngredient(formData.ingredient));
    };
    console.log(handleSubmit)

    return (
        <div className='flex md:flex-row flex-col justify-center items-center gap-10 bg-orange-50 pt-10' onSubmit={handleSubmit}>
            <div className=' bg-orange-400 border-2 border-black-100 border-dashed rounded-3xl md:h-[500px] h-96 w-96 relative '
                 onDragOver={handleDragOver}
                 onDrop={handleDrop}
                 name='uploadImage'
            >
                {imageURL && (
                    <>
                        <img src={imageURL} alt="Dropped" style={{ maxWidth: 'full', maxHeight: 'full', justifyContent: "center"}} />
                        <button onClick={handleCancel} style={{ position: 'absolute', top: '10px', right: '10px' }}>Cancel</button>
                    </>
                )}
                {!imageURL && (
                    <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                        Drag & drop image here
                        <h1>Or</h1>
                        <input type="file" hidden />
                        <button className='font-small border-2 border-black' onClick={() => inpuRef.current.click()}>
                            Select Files
                        </button>
                    </p>
                )}
            </div>

            <div className='flex flex-col mb-24'>
                <div className='w-full'>
                    <label htmlFor="recipeName" className="mb-2 flex text-orange-400 justify-start">Recipe Title</label>
                    <input
                        type="text"
                        autoComplete='off'
                        className="border border-orange-400 sm:text-sm rounded-2xl focus:border-orange-400 block w-96 p-2.5 dark:placeholder-gray-400"
                        placeholder="Add a title"
                        name="recipeName"
                        value={formData.recipeName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='pt-4 w-full'>
                    <label htmlFor="description" className="mb-2 flex text-orange-400 justify-start">Description</label>
                    <input
                        type="text"
                        autoComplete='off'
                        className="border border-orange-400 sm:text-sm rounded-2xl focus:border-orange-400 block w-96 p-2.5 dark:placeholder-gray-400"
                        placeholder="Add a detailed description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='w-full pt-4'>
                    <label htmlFor="ingredient" className="mb-2 flex text-orange-400 justify-start">Ingredients </label>
                    <textarea
                        autoComplete='off'
                        className="border border-orange-400 sm:text-sm rounded-2xl focus:border-orange-400 block w-96 p-2.5 dark:placeholder-gray-400"
                        placeholder="write Ingredients"
                        name="ingredient"
                        value={formData.ingredient}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='w-full pt-4'>
                    <label htmlFor="instruction" className="mb-2 flex text-orange-400 justify-start">Instructions </label>
                    <textarea
                        autoComplete='off'
                        className="border border-orange-400 sm:text-sm rounded-2xl focus:border-orange-400 block w-96 p-2.5 dark:placeholder-gray-400"
                        placeholder="steps"
                        name="instruction"
                        value={formData.instruction}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='w-full pt-6'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <label htmlFor="category" className="mb-2 flex text-orange-400 justify-start">Categories</label>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                placeholder='Choose a tag'
                                sx={{
                                    borderRadius: '18px',
                                    border: '1px solid orange',
                                }}
                                className="block w-96 p-2.5 dark:placeholder-gray-400"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <MenuItem value={"breakFast"}>BreakFast</MenuItem>
                                <MenuItem value={"lunch"}>Lunch</MenuItem>
                                <MenuItem value={"diner"}>Dinner</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <div className='w-full pt-6'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <label htmlFor="tag" className="mb-2 flex text-orange-400 justify-start">Tags</label>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                placeholder='Choose'
                                className="block w-96 p-2.5 dark:placeholder-gray-400"
                                sx={{
                                    borderRadius: '18px',
                                    border: '1px solid orange',
                                }}
                                name="tag"
                                value={formData.tag}
                                onChange={handleChange}
                            >
                                <MenuItem value={"Vegetarian"}>Vegetarian</MenuItem>
                                <MenuItem value={"Vegan"}>Vegan</MenuItem>
                                <MenuItem value={"Gluten"}>Gluten-Free</MenuItem>
                                <MenuItem value={"Keto"}>Keto</MenuItem>
                                <MenuItem value={"paleo"}>Paleo</MenuItem>
                                <MenuItem value={"dairyFree"}>Dairy-Free</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <div className='flex justify-start pt-6'>
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "orange",
                                color: "black",
                                lineHeight: '27px',
                                width: 'full',
                                '&:hover': {
                                    backgroundColor: 'orange',
                                },
                            }}
                            type={'submit'}
                            onClick={handleSubmit}
                        >
                            POST RECIPE
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default Create;
