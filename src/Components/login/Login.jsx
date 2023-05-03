import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle,FaGithub } from 'react-icons/fa';


const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold underline">Login here!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
           
          </form>
          <h1 className="text-2xl underline text-center mb-5">Login With </h1>
          <div className="text-center mb-4">
            <button className="btn btn-outline w-[75%] text-red-700"><FaGoogle className="mr-4 "></FaGoogle>Login with Google</button>
            <button className="btn btn-outline w-[75%] mt-4"><FaGithub className="mr-4"></FaGithub>Login with Github</button>
            <p className="mt-5">
              Don't have an account <Link className="text-red-700" to="/register">Register here!!!</Link>
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Login;