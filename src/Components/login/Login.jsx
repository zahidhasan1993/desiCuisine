import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { DataProvider } from "../providers/AuthProvider";


const Login = () => {
  const {emailLogin,googleLogin,githubLogin} = useContext(DataProvider);
  const [err,setErr] = useState(null)
  const handleEmailLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    emailLogin(email,password)
    .then(result => {
      form.reset();
    })
    .catch(error => {
      setErr(error.message);
    })
    

  } ;

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {

    })
    .catch(error => {
      setErr(error.message)
    })
  }
  const handleGitLogin = () => {
    githubLogin()
    .then(result => {

    })
    .catch(error => {
      setErr(error.message)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <p className="text-xl text-red-700 my-8">{err}</p>
          <h1 className="text-5xl font-bold underline">Login here!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleEmailLogin} className="card-body">
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
            <button onClick={handleGoogleLogin} className="btn btn-outline w-[75%] text-red-700"><FaGoogle className="mr-4 "></FaGoogle>Login with Google</button>
            <button onClick={handleGitLogin} className="btn btn-outline w-[75%] mt-4"><FaGithub className="mr-4"></FaGithub>Login with Github</button>
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
