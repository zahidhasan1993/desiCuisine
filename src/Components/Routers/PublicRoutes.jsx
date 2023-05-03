import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Layout from '../shared/Layout';
import Blog from '../extra/Blog';
import ErrorPage from '../Error/ErrorPage';
import Login from '../login/Login';
import Register from '../login/Register';
import ChefsRecipe from '../ChefsRecipe/ChefsRecipe';

const PublicRoutes = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch('http://desicuisine-zahidhasan1993.vercel.app/chefs')
            },
            {
                path : "blog",
                element : <Blog></Blog>
            },
            {
                path : "login",
                element : <Login></Login>
            },
            {
                path : "register",
                element : <Register></Register>
            },
            {
                path : "chefsRecipes/:id",
                element : <ChefsRecipe></ChefsRecipe>,
                loader : ({params}) => fetch(`http://desicuisine-zahidhasan1993.vercel.app/chefs/${params.id}`)

            }
        ]
    }
])

export default PublicRoutes;