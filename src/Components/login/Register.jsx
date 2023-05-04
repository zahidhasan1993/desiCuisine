import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { DataProvider } from "../providers/AuthProvider";

const Register = () => {
  const { googleLogin,githubLogin,emailSignUp } = useContext(DataProvider);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => {
        console.log(error);
        setErr(error.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error.message);
      setErr(error.message)
    })
  };

  const handleEmailRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirm.value;
      const photo = form.photo.value;

      if(password.length < 6){
          setErr('password must be 6 charecters long...');
          return;
      }

      if (password !== confirmPassword) {
        setErr('Password does not match....');
        return;
      }

      emailSignUp(email,password)
      .then(result => {
        form.reset();
        navigate('/')
        
      })
      .catch(error => {
        setErr(error.message);
      })


      console.log(name,email,password);

  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <p className="text-xl text-red-700 my-8">{err}</p>
          <h1 className="text-5xl font-bold underline">Register here!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleEmailRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="PhotoURL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                name="confirm"
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <h1 className="text-2xl underline text-center mb-5">
            Register With{" "}
          </h1>
          <div className="text-center mb-4">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-[75%] text-red-700"
            >
              <FaGoogle className="mr-4 "></FaGoogle>Register with Google
            </button>
            <button onClick={handleGithubLogin} className="btn btn-outline w-[75%] mt-4">
              <FaGithub className="mr-4"></FaGithub>Register with Github
            </button>
            <p className="mt-5">
              All ready have an account{" "}
              <Link className="text-red-700" to="/login">
                Login here!!!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
