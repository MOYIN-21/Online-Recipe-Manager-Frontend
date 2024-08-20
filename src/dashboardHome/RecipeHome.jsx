import { useSelector } from 'react-redux';

const RecipeHome = () => {

    const select = useSelector(state => state.recipe)
    // const allOurRecipe = sessionStorage.getItem('recipe');
    // console.log("Recipe from Session Storage", JSON.parse(allOurRecipe));
    console.log("select=>", select);


  return (
    <div className='bg-orange-50 h-screen'>
        <div draggable='true' className='h-72 bg-white w-72 shadow'>
            <p className='flex justify-start'>
                {select.recipe.category}
            </p>
            <p className='flex justify-end'>
                {select.recipe.tag}
            </p>

        </div>
        
     </div>
    );
};

export default RecipeHome