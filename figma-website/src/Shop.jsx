import { Link } from 'react-router-dom'
function Shop() {
    return (
        <>
        <div>I am inside the shop.jsx</div>
            <button><Link to="/ItemDetails">Click me to open the details</Link></button>
      </>
  );
}

export default Shop;