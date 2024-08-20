import {useState, useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch} from 'react-redux';
import CreateIcon from '@mui/icons-material/Create';
import {setCreateRecipe} from "../redux/FormSlice.js";
import Badge from '@mui/material/Badge';
import {Link} from "react-router-dom";
// import MenuItem from '@mui/material/MenuItem';

const Create = () => {
    const dispatch = useDispatch();
    // const [imageURL, setImageURL] = useState("")
    // const inpuRef = useRef();
    // const [submitDisabled, setSubmitDisabled] = useState(true);


    // const handleDragOver = (event) => { event.preventDefault(); };
    // const handleDrop = (event) => {

    //     event.preventDefault();
    //     const file = event.dataTransfer.files[0];
    //     setImageURL(URL.createObjectURL(file));
    // };

    // const [imageURL, setImageURL] = useState(null);

    // const handleDragOver = (event) => {
    //   event.preventDefault();
    //   setImageURL(event.target.value)
    // };
  
    // const handleDrop = (event) => {
    //   setImageURL(event.target.value)
    //   const file = event.dataTransfer.files[0];
    //   setImageURL(URL.createObjectURL(file));
    // };

    // const handleCancel = () => {
    //     setImageURL(null);
    // };

    const [imageURL, setImageURL] = useState("");
    const inputRef = useRef();
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setImageURL(URL.createObjectURL(file));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        setImageURL(URL.createObjectURL(file));
        }
    };

    const handleCancel = () => {
        setImageURL(null);
        if (inputRef.current) {
        inputRef.current.value = '';
        }
    };


//   const handleCancel = () => {
//     setImageURL(null);
//     if (inputRef.current) {
//         inputRef.current.value = '';
//       }
//   };


    const [formData, setFormData] = useState({
        imageDrop: "",
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

    const initialFormData = {
        imageDrop: "",
        recipeName: "",
        description: "",
        ingredient: "",
        instruction: "",
        category: "",
        tag: "",
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data =>", formData);
        dispatch(setCreateRecipe(formData))

        setFormData(initialFormData)
    };
    // console.log(formData)

    useEffect(() => {
        const isFormValid =
            formData.imageDrop !== '' &&
            formData.recipeName !== '' &&
            formData.description !== '' &&
            formData.ingredient !== '' &&
            formData.instruction !== '' &&
            formData.category !== '' &&
            formData.tag !== ''
        setSubmitDisabled(!isFormValid);
    }, [formData]);

    // const get = useSelector(state => (state.ingredient))
    // const get = useSelector((state) => state.recipe.createRecipe)
    // const cohort = useSelector((state) => state.recipe.ingredient);
    // console.log(get)
    // const fileInputRef = useRef('');
    


    return (
        <div className='flex md:flex-row flex-col justify-center items-center gap-10 bg-orange-50 pt-10 w-full ' onSubmit={handleSubmit}>
            <div
                className='bg-orange-400 border-2 border-black-100 border-dashed rounded-3xl md:h-[600px] md:w-96 h-72 w-72 relative'
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                name='imageDrop'
                value={formData.imageDrop}
                onChange={handleChange}
                required
            >
            {imageURL && (
                <>
                <img src={imageURL} alt="Dropped" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '1.5rem' }} />
                <button onClick={handleCancel} style={{ position: 'absolute', top: '3px', right: '10px' }} className='bg-white'>
                    <MenuItem>
                    <Badge>
                        <CreateIcon
                        size="large"
                        color="inherit"
                        sx={{ color: "orange" }}
                        />
                    </Badge>
                    <p>Cancel</p>
                    </MenuItem>
                </button>
                </>
            )}
            {!imageURL && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <p>Drag & drop image here</p>
                <h1>Or</h1>
                <input
                    type="file"
                    id="file"
                    name='imageDrop'
                    onChange={handleFileChange}
                    value={formData.imageDrop}
                    // onChange={handleChange}
                    style={{ display: 'none' }}
                    required
                />
                <label htmlFor="file" className='font-small border-2 bg-white cursor-pointer'>
                    select files
                </label>
                </div>
            )}
        </div>
{/* 
             <div className=' bg-orange-400 border-2 border-black-100 border-dashed rounded-3xl md:h-[600px] md:w-96 h-72 w-72  relative'
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            name='imageDrop'
            value={formData.image}
            onChange={(event)=> {handleDrop(event)
            setFileUpload}}
      

                 onDragOver={handleDragOver}
                 onDrop={handleDrop}
                 name='uploadImage'
                 value={formData.image}
            >
                {imageURL && (
                    <>
                        <img src={imageURL} alt="Dropped" style={{  width: '100%', height: '100%', objectFit: 'contain', borderRadius: '1.5rem'}}  />
                        <button onClick={handleCancel} style={{ position: 'absolute', top: '3px', right: '10px' }} className='bg-white'>
                            <MenuItem>
                                <Badge>
                                    <CreateIcon
                                        size="large"
                                        color="inherit"
                                        sx={{color: "orange"}}
                                    >
                                    </CreateIcon>
                                </Badge>
                                <p>Cancel</p>
                            </MenuItem>
                        </button>
                    </>
                )}
                {!imageURL && (
                    <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                        Drag & drop image here
                        <h1>Or</h1>
                        <input type="file"  />
                        <input 
                            type="file" 
                            id="file" 
                            name='uploadImage'
                            value={formData.image}
                         />
                        <button className='font-small border-2 border-black' 
                        onClick={() => inpuRef.current.click()}
                        onClick={handleDrop}
                        onDragOver={handleDragOver}
                        >
                            Select Files
                        </button>
                    </p>
                )}
            </div> */}

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
                            type={`text`}
                            value={formData.ingredient}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='w-full pt-4'>
                        <label htmlFor="instruction"
                            className="mb-2 flex text-orange-400 justify-start">Instructions </label>
                        <textarea
                            autoComplete='off'
                            className="border border-orange-400 sm:text-sm rounded-2xl focus:border-orange-400 block w-96 p-2.5 dark:placeholder-gray-400"
                            placeholder="steps"
                            name="instruction"
                            type={`text`}
                            value={formData.instruction}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='w-full pt-6'>
                        <Box sx={{minWidth: 120}}>
                            <FormControl fullWidth>
                                <label htmlFor="category"
                                    className="mb-2 flex text-orange-400 justify-start">Categories</label>
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
                        <Box sx={{minWidth: 120}}>
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
                            <Link to="/dashboard/recipeHome">
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: !submitDisabled ? "orange" : "#BDBDBD",
                                        // backgroundColor: "orange",
                                        color: "black",
                                        lineHeight: '27px',
                                        width: 'full',
                                        '&:hover': {
                                            backgroundColor: 'orange',
                                        },
                                    }}
                                    type={'submit'}
                                    onClick={handleSubmit}
                                    disabled={submitDisabled}
                                >
                                    POST RECIPE
                                </Button>
                            </Link>
                        </Stack>
                    </div>
                </div>
            </div>
    );
}

export default Create;
