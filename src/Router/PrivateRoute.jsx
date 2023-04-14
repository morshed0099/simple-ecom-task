import React, { useContext } from 'react';
import { userAuth } from '../contextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user,loader} = useContext(userAuth);
    if(loader){
        return <h1>loading..</h1>
    }
    if (!user) {
       return <Navigate to="/login" state={{ form: location }} replace />
    }
    return children;

};

export default PrivateRoute;