import { useState } from 'react'
import Universal from './Universal'
import Navbar from './mycomponents/Navbar.jsx'
import Shop from './Shop.jsx'
import ItemDetails from './ItemDetails.jsx'
import Cart from './Cart.jsx'
import Footer from './Footer.jsx'
import NewArrivals from './NewArrivals.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <><Navbar /><Universal /><Footer /><NewArrivals /></>
        },
        {
            path: '/Shop',
            element: <><Navbar /><Shop /><Footer /></>
        },
        {
            path: '/ItemDetails',
            element: <><Navbar /><ItemDetails /><Footer /></>
        }, {
            path: '/Cart',
            element: <><Navbar /><Cart /><Footer /></>
        },
        {
            path: '/NewArrivals',
            element: <><Navbar /><NewArrivals /><Footer /></>
        }
    ]);
    return (
        <RouterProvider router={router} />
    )
}

export default App
