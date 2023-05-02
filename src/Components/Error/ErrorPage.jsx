import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const errImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png"
  const error = useRouteError();
  return (
    <>
      <div id="error-page" className="flex flex-col justify-center items-center text-3xl"> 
        <img src={errImg} className="w-[40%]" alt="" />
        <p className="text-red-700">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-red-700">{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
