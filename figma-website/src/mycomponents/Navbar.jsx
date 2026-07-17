import { useState } from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav className="nav">
          <div><h1 className="h3"> <Link to="/" >SHOP.CO</Link></h1></div>
            <div className="Shop">
                <div><Link to="/Shop">Shop</Link></div>
                <svg className="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="shop">On Sale</div>
           <Link to="/NewArrivals"><div className="shop">New Arrivals</div></Link>
            <div className="shop">Brands</div>
            <div className="input">
                <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M11.5 11.5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input type="text" placeholder="Search for products..." />
            </div>
            <div className="cart"><Link to="/Cart"><img src="/cart.png" height="20px"/></Link></div>
            <div className="login"><img src="/login.png" height="20px"/></div>
        </nav>
    );
}

export default Navbar;