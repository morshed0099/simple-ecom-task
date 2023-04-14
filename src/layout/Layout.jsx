import React from 'react';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header />
            <div className='p-4 max-w-[1300px] mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;