import React, { useContext, useEffect, useState } from 'react';
import { DataProvider } from '../providers/AuthProvider';
import ViewRecipes from './ViewRecipes';

const SomeRecipes = () => {

    const [recipes,setRecipes] = useState([]);
    const {loader} = useContext(DataProvider)

    useEffect(() => {
        fetch('https://desicuisine-zahidhasan1993.vercel.app/recipes/1')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    // console.log(recipes);

    if(loader){
        return <button className="btn loading md:mt-28 md:ml-[45rem]">loading</button>
    }

    return (
        <div className='md:flex md:gap-6'>
            {
                recipes.map(recipe => <ViewRecipes key={recipe.key} data={recipe}></ViewRecipes>)
            }
        </div>
    );
};

export default SomeRecipes;