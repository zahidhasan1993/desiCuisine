import React from "react";
import { HiThumbUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const ChefsCard = ({ data }) => {
  const { cuisine_item_id
    ,experience, likes, name, number_of_recipe, picture,id } = data;
  return (
    <div className="card w-[100%] bg-base-100 shadow-md mb-10">
      <figure>
        <img
        className="w-[100%] h-96"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience : <span className="text-red-700"> {experience}</span></p>
        <p>His recipes On this site :<span className="text-red-700"> {number_of_recipe}</span></p>
        <div className="mt-8 flex items-center">
            <HiThumbUp className="text-3xl"></HiThumbUp>
            <span className="text-red-700 mt-2 ml-2"> {likes}</span>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/chefsRecipes/${id}`} className="btn btn-error  text-white">View Recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;
