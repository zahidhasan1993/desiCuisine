import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Layout from '../shared/Layout';
import Blog from '../extra/Blog';
import ErrorPage from '../Error/ErrorPage';

const PublicRoutes = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "home",
                element : <Home></Home>
            },
            {
                path : "blog",
                element : <Blog></Blog>
            },
            {

            }
        ]
    }
])

export default PublicRoutes;