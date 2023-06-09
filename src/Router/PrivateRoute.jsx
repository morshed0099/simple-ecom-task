import React, { useContext, useState } from 'react';
import { userAuth } from '../contextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';
import RiseLoader from "react-spinners/RiseLoader";
const PrivateRoute = ({ children }) => {
  // const [token, setToken] = useState()
  // setToken()
  const token = localStorage.getItem('token')
  const location = useLocation()

  const { user, loader, setLoader } = useContext(userAuth);
  console.log(token, loader, '12 jjj')
  if (!token) {
    setLoader(false)
    return <Navigate to="/login" state={{ form: location }} replace />

  }
  if (loader) {
    return <div className='flex justify-center items-center'><RiseLoader color='green' /></div>
  }

  if (!user) {
    return <Navigate to="/login" state={{ form: location }} replace />
  }
  return children;

};

export default PrivateRoute;