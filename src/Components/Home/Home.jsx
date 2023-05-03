import React, { useContext } from 'react';
import Header from '../shared/Header';
import { DataProvider } from '../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from './ChefsCard';

const Home = () => {
    const chefs = useLoaderData();
    // console.log(chefs);
    return (
        <div>
            <Header></Header>
            <h1 className='text-5xl underline text-center text-red-700 my-20'>Meet Our Chef's</h1>

            <div className='grid md:grid-cols-3 gap-4'>
                {
                    chefs.map(chef => <ChefsCard key={chef.id} data={chef}></ChefsCard>)
                }
            </div>
        </div>
    );
};

export default Home;