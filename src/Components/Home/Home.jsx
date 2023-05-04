import React, { useContext } from 'react';
import Header from '../shared/Header';
import { DataProvider } from '../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from './ChefsCard';
import SomeRecipes from '../extra/SomeRecipes';
import Feedback from '../extra/Feedback';

const Home = () => {
    const {loader} = useContext(DataProvider);
    const chefs = useLoaderData();
    // console.log(chefs);
    if (loader) {   
        return <button className="btn loading md:mt-28 md:ml-[45rem]">loading</button>
    }
    return (
        <div>
            <Header></Header>
            <h1 className='text-5xl underline text-center text-red-700 my-20'>Meet Our Chef's</h1>

            <div className='grid md:grid-cols-3 gap-4'>
                {
                    chefs.map(chef => <ChefsCard key={chef.id} data={chef}></ChefsCard>)
                }
            </div>
            <h1 className='text-5xl underline text-center text-red-700 my-20'>Some Recipes Of Our Chef's</h1>
            <SomeRecipes></SomeRecipes>
            <h1 className='text-5xl underline text-center text-red-700 my-20'>Some Recipes Of Our Chef's</h1>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;