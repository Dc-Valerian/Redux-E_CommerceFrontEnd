import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import Cart from '../Cart/Cart'
import AllProducts from '../DetailScreen/AllProducts'
import ProductDetails from '../DetailScreen/ProductDetails'
import Home from '../Home/Home'
import HomeScreen from '../Homescreen/HomeScreen'

const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <HomeScreen />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/all-products",
            element: <AllProducts />
        },
        {
            path: "/productdetails/:productID",
            element: <ProductDetails />
        },
        {
            path: "/cart",
            element: <Cart />
        }
    ])
  return element
}

export default AllRoutes