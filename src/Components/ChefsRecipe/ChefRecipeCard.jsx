import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipeCard = ({ data }) => {
    const [disabled,setDisabled] = useState(false)
  const { cookingMethod, img, ingredients, rating, recipeName } = data;

  const notify = () => {
    toast("you have added this to you favorite recipe");
    setDisabled(true);
    // console.log("a");

  };
  return (
    <div className="card w-[100%] bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="food" className="w-[100%] h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-red-700 text-2xl">{recipeName}</h2>
        <h3 className="text-xl underline font-bold mt-4">Ingredients :</h3>
        <ol>
          {ingredients.map((ing) => (
            <li>{ing}</li>
          ))}
        </ol>
        <h3 className="text-xl underline font-bold mt-4">Recipe :</h3>

        <p>{cookingMethod}</p>

        <div className="card-actions justify-end">
          <button onClick={notify} className="btn btn-error" disabled={disabled}>
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipeCard;
