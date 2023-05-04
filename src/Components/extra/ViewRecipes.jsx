import React from "react";

const ViewRecipes = ({data}) => {
    const {img,recipeName} = data
  return (
    <div className="card w-[100%] bg-base-100 shadow-xl image-full mb-3">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body mt-24">
        <h2 className="card-title">{recipeName}</h2>
        <p className="mt-5">For details of this recipes <span className="font-bold">view our chefs recipes</span></p>
        <div className="card-actions justify-end">
          
        </div>
      </div>
    </div>
  );
};

export default ViewRecipes;
