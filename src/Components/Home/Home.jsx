import React, { useContext } from 'react';
import Header from '../shared/Header';
import { DataProvider } from '../providers/AuthProvider';

const Home = () => {
    const user = useContext(DataProvider)
    console.log(user);
    return (
        <div>
            <Header></Header>
            <h1 className='text-5xl underline text-center text-red-700 my-20'>Meet Our Chef's</h1>
        </div>
    );
};

export default Home;