import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userAuth } from '../contextProvider/ContextProvider';
import useCardView from '../Hooks/useCardView';



const Header = () => {
    const { user, setUser, } = useContext(userAuth)
    const isAdmin = true;

    const [card, refetch] = useCardView(user)
    const handelLogout = async () => {
        const usr = await setUser(null)
        const data = await refetch()
        localStorage.removeItem('token');
        return (usr, data);
    }
    const menuItems =
        <>

            <NavLink style={{ marginTop: "10px", marginRight: "5px", fontWeight: "bold" }} className={`isactive ? "active":""`} to='/'>Product</NavLink>
            {
                isAdmin ?
                    <NavLink style={{ marginTop: "10px", marginRight: "5px", fontWeight: "bold" }} to='/dashboard'>Dashboard</NavLink> : ""
            }
            <NavLink to='/viewcart'>
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{card.length}</span>
                    </div>
                </label>
            </NavLink>
            <NavLink to='/profile'>
                <img src={user?.image ? user?.image : "https://th.bing.com/th?id=OIP.lcdOc6CAIpbvYx3XHfoJ0gHaF3&w=280&h=222&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"} className='w-12 h-10 rounded-full' alt="" />
            </NavLink>
            {
                user?.email ?
                    <>
                        <button onClick={handelLogout} className='btn btn-sm border-none mt-2 ml-3 bg-pink-600 hover:bg-pink-800'>LogOut</button>
                    </>
                    :
                    <>
                        <NavLink style={{ marginTop: "10px", marginRight: "10px", fontWeight: "bold" }} to='/login'>Login</NavLink>

                    </>
            }

        </>
    return (
        <div className=' w-full  bg-base-100'>
            <nav className='max-w-[1440px] mx-auto' >
                <div className="navbar">
                    <div className="navbar">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold text-pink-800">Simple E-com</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItems}
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;