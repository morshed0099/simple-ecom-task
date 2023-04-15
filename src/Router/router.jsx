import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Error404 from "../pages/Error404.JSX";
import DashBorad from "../pages/DashBoard/DashBorad";
import ViewCat from "../pages/ViewCart/ViewCat";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import MenProducs from "../pages/Products/MenProducs";
import WomenProduct from "../pages/Products/WomenProduct";
import KidsProducts from "../pages/Products/KidsProducts";
import DashBorardLayout from "../layout/DashBorardLayout";
import AddCutomer from "../pages/DashBoard/AddCustomer";
import AllCustomers from "../pages/DashBoard/AllCustomers/AllCustomers";
import AllOrder from "../pages/DashBoard/AllOrder/AllOrder";
import AllProducts from "../pages/DashBoard/AllProducts/AllProducts";
import AddpRroduct from "../pages/DashBoard/AddProduct/AddpRroduct";
import Profile from "../pages/Profile";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error404 />,
        children: [
            {
                path: '/',
                element: <Products />
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
                path: '/men',
                element: <MenProducs />
            },
            {
                path: '/women',
                element: <WomenProduct />
            },
            {
                path: '/kids',
                element: <KidsProducts />
            },
            {
                path:'/profile',
                element:<Profile />
            },
            {
                path: '/viewcart',
                element: <ViewCat />
            },

            {
                path: '/productdetails/:id',
                loader: async ({ params }) => {
                    return await fetch(`https://simple-ecom-server.vercel.app/productdetails/${params.id}`)
                },
                element: <PrivateRoute><ProductDetails /></PrivateRoute>
            }

        ],

    },
    {
        path: "/dashboard",
        element: <DashBorardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <DashBorad />
            },
            {
                path: '/dashboard/addcustomer',
                element: <AddCutomer />
            },
            {
                path:'/dashboard/allcustomer',
                element:<AllCustomers />
            },
            {
                path:'/dashboard/allorder',
                element:<AllOrder />
            },
            {
                path:"/dashboard/allproducts",
                element:<AllProducts />
            },
            {
                path:'/dashboard/addproduct',
                element:<AddpRroduct />
            }
        ]
    }
])