import React, { useContext } from 'react';
import { DataProvider } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loader,user} = useContext(DataProvider);
    const location = useLocation();

    if (loader) {
        return <button className="btn loading md:mt-28 md:ml-[45rem]">loading</button>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;