import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Error404 from "../pages/Error404.JSX";
import DashBorad from "../pages/DashBoard/DashBorad";
import ViewCat from "../pages/ViewCart/ViewCat";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error404 />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/viewcart',
                element: <ViewCat />
            },
            {
                path: '/product',
                element: <Products />
            },
            {
                path: '/productdetails/:id',
                loader:async({params})=>{
                    return await fetch(`https://ecom-repliq-server-morshed0099.vercel.app/productdetails/${params.id}`)
                },
                element: <ProductDetails />
            },
            {
                path: "/dashboard",
                element: <DashBorad />
            }
        ]
    }
])