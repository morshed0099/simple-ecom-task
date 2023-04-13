import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Error404 from "../pages/Error404.JSX";
import DashBorad from "../pages/DashBoard/DashBorad";
import ViewCat from "../pages/ViewCart/ViewCat";
import Products from "../pages/Products/Products";

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
                path: "/dashboard",
                element: <DashBorad />
            }
        ]
    }
])