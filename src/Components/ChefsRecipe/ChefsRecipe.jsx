import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { HiThumbUp } from "react-icons/hi";
import ChefRecipeCard from "./ChefRecipeCard";

const ChefsRecipe = () => {
  const data = useLoaderData();
  const [recipes,setRecipes] = useState([]);
  const {
    id,
    bio,
    cuisine_item_id,
    experience,
    likes,
    name,
    number_of_recipe,
    picture,
  } = data;


  useEffect(() => {
    fetch(`http://desicuisine-zahidhasan1993.vercel.app/recipes/${cuisine_item_id}`)
    .then(res => res.json())
    .then(data => setRecipes(data))
  }, []);

//   console.log(data);

  
  // console.log(data);
  return (
    <>
      <div className="my-11">
        <div className="card md:card-side bg-base-100">
          <figure className="md:w-[35%]">
            <img className="" src={picture} alt="Movie" />
          </figure>
          <div className="card-body md:w-[50%]">
            <h2 className="text-4xl font-bold text-red-700">{name}</h2>
            <p>{bio}</p>
            <p>
              Experience : <span className="text-red-700"> {experience}</span>
            </p>
            <p>
              His recipes On this site :
              <span className="text-red-700"> {number_of_recipe}</span>
            </p>
            <div className="card-actions justify-end">
            <div className="mt-8 flex items-center">
            <HiThumbUp className="text-3xl"></HiThumbUp>
            <span className="text-red-700 mt-2 ml-2"> {likes}</span>
        </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-5xl underline text-center text-red-700 my-20'>Recipe's</h1>
      <div className="my-9 grid md:grid-cols-2 gap-3">
        {recipes.map((recipe) => (
          <ChefRecipeCard key={recipe.key} data={recipe}></ChefRecipeCard>
        ))}
      </div>
    </>
  );
};

export default ChefsRecipe;
