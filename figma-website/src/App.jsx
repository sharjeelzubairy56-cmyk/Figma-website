import { useState } from 'react'
import Universal from './Universal'
import Navbar from './mycomponents/Navbar.jsx'
import Shop from './Shop.jsx'
import ItemDetails from './ItemDetails.jsx'
import Cart from './Cart.jsx'
import Footer from './Footer.jsx'
import NewArrivals from './NewArrivals.jsx'
import TopSelling from './TopSelling.jsx'
import Browse from './Browse.jsx'
import HappyCustomers from './HappyCustomers.jsx'
import RealFooter from './RealFooter.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <><Navbar /><Universal /><Footer /><NewArrivals /><hr /><TopSelling /><Browse /><HappyCustomers /><RealFooter/></>
        },
        {
            path: '/Shop',
            element: <><Navbar /> <hr /><Shop /></>
        },
        {
            path: '/ItemDetails',
            element: <><Navbar /> <hr /><ItemDetails /></>
        }, {
            path: '/Cart',
            element: <><Navbar /> <hr /><Cart /></>
        },
        {
            path: '/NewArrivals',
            element: <><Navbar /> <hr /><NewArrivals /></>
        }
    ]);
    return (
        <RouterProvider router={router} />
    )
}

export default App
