import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { DataProvider } from "../providers/AuthProvider";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const {logOut,user} = useContext(DataProvider);
  // console.log(user.photoURL);
  const onHover = () =>{
    setHover(!hover)
  }
  const handleLogOut = () => {
    logOut()
    .then(result => {

    })
    .catch(error => {
      
    })
  }

  // console.log(hover);

  return (
    <div className="navbar bg-base-100 my-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-700" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-700" : "")}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case font-bold text-2xl">
          Desi<span className="text-red-700">CuiSine</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-red-700" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-red-700" : "")}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      {hover && <p className="mr-4">{user.displayName}</p>}
        {user ? (
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} onMouseEnter={onHover} onMouseLeave={onHover}/>
              
            </div>
            <button onClick={handleLogOut} className="btn bg-red-700 hover:bg-red-600 ml-4">LogOut</button>
          </div>
        ) : (
          <Link to="/login" className="btn bg-red-700 hover:bg-red-600">
            Login
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
