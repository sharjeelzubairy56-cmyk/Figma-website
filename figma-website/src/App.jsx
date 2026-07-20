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
import Error from './Error.jsx'
import OnSale from './OnSale.jsx'
import SIZE from './Context.jsx'
import Ending from './Ending.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
    const [size, setSize] = useState("small");
    const [cartItems, setCartItems] = useState([]);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <><Navbar /><Universal /><Footer /><NewArrivals /><hr /><TopSelling /><Browse /><HappyCustomers /><RealFooter /></>
        },
        {
            path: '/Shop',
            element: <><Navbar /> <hr /><Shop /><RealFooter /></>
        },
        {
            path: '/ItemDetails',
            element: <><Navbar /> <hr /><ItemDetails /><RealFooter /></>
        }, {
            path: '/Cart',
            element: <><Navbar /> <hr /><Cart /><RealFooter /></>
        },
        {
            path: '/NewArrivals',
            element: <><Navbar /> <hr /><NewArrivals /><RealFooter /></>
        },
        {
            path: '/TopSelling',
            element: <><Navbar /> <hr /><TopSelling /><RealFooter /></>
        },
        {
            path: '/Error',
            element: <><Navbar /> <hr /><Error /></>
        },
        {
            path: '/OnSale',
            element: <><Navbar /><hr /><OnSale /><RealFooter /></>
        },
        {
            path: '/Ending',
            element:<><Navbar/><hr/><Ending/><RealFooter/></>
        }
    ]);
    return (
        <SIZE.Provider value={{ size, setSize, cartItems, setCartItems }}>
            <RouterProvider router={router} />
        </SIZE.Provider>
    )
}
export default App;