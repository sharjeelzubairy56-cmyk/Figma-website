import { Link } from 'react-router-dom'
function ItemDetails() {
    return (
        <>
            <div>I am the items detail</div>
            <button><Link to="/Cart">Hi I am the cart</Link></button>
        </>
    );
}

export default ItemDetails;