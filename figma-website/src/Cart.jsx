import './Tailwind.css';
import { useContext, useState, useEffect } from 'react'
import SIZE from './Context.jsx'
import { Link } from 'react-router-dom'
function Cart() {
    const [price, setPrice] = useState(120);
    const [base, setBase] = useState(120);
    const [selectedSize, setSelectedSize] = useState('Small');
    const [cart, setCart] = useState(true);
    const [value, setValue] = useState(1);
    const { size, cartItems, setCartItems } = useContext(SIZE);
    const getBasePrice = (itemSize) => {
        if (itemSize === 'Medium') return 130;
        else if (itemSize === 'Large') return 140;
        else if (itemSize === 'X-Large') return 150;
        else return 120;
    };
    useEffect(() => {
        if (size) {
            setCartItems((prev) => [...prev, size]);
        }
    }, [size]);
    const handleDelete = (indexToDelete) => {
        setCartItems((prev) => prev.filter((_, index) => index !== indexToDelete));
    };
    const subtotal = cartItems.reduce((sum, itemSize) => sum + getBasePrice(itemSize) * value, 0);
    return (
        <div>
            <div className="m-10 mt-15 text-[1.5rem]">
                <h1>YOUR CART</h1>
            </div>
            <div className="mx-10 h-auto border-[#F0F0F0] border rounded-[1%]">
            {cartItems.length === 0 ? (
                <div className="h-[25vh] flex items-center justify-center underline"><h1>Your cart is empty</h1></div>
            ) : (
                    cartItems.map((itemSize, index) => (
                        <div className="p-6" key={index}>
                            <div className="flex mb-5 gap-4">
                                <div className=" h-70 w-100"><img src="shirt.jpg" height="100%" width="100%"/></div>
                                <div className=" w-full">
                                    <div className=" h-14 w-auto flex gap-4">
                                        <div className=" h-14 w-[70%] flex items-center justify-start font-black text-4xl pl-10">T-Shirt with tape details</div>
                                        <div className=" h-14 w-[30%] flex items-center justify-end pr-28" onClick={() => handleDelete(index)}><img src="delete.png" height="50%" width="17%" /></div>
                                    </div>
                                    <div className=" h-14 w-[70%] pl-10 flex items-center justify-start text-2xl tracking-tight"><b>Color :</b> &nbsp; white</div>
                                    <div className=" h-14 w-[70%] pl-10 flex items-center justify-start text-2xl tracking-tight"><b>Size&nbsp;&nbsp;&nbsp;&nbsp;:</b>&nbsp;&nbsp;{itemSize}</div>
                                    <div className="flex">
                                        <div className=" h-14 w-[70%] pl-10 flex items-center justify-start text-2xl tracking-tight font-black">
                                            ${getBasePrice(itemSize) * value}
                                        </div>
                                        <div>
                                            <button className="cursor-pointer mt-4  ml-6 w-[250%] h-[20%] bg-[#F0F0F0] border-0 text-gray-600 gap-3">
                                                <button onClick={() => { setValue(value > 1 ? prev => prev - 1 : 1); setPrice(base * (value - 1)); }} className="cursor-pointer h-auto text-10x1 bg-[#F0F0F0] border-0 text-black font-black">➖</button>
                                                {value}
                                                <button onClick={() => { setValue(prev => prev + 1); setPrice(base * (value + 1)); }} className="cursor-pointer h-[10%]  text-10x1 bg-[#F0F0F0] border-0 text-black font-black">➕</button>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                    <hr/>
                </div>
            )))}
            </div>
            <div className="mx-10 h-auto border-[#F0F0F0] border mt-10 rounded-[1%] p-6">
                <div className="text-2xl font-black mb-4">Order Summary</div>
                <div className="flex justify-between items-center text-lg text-gray-500 mb-3">
                    <div>Sub Total</div>
                    <div className="font-black text-black">${subtotal}</div>
                </div>
                <div className="flex justify-between items-center text-lg text-gray-500 mb-4">
                    <div>Delivery Fee</div>
                    {subtotal==0 ?
                        (<div className="font-black text-black">$0</div>) : (<div className="font-black text-black">$15</div>)
                    }
                   
                </div>
                <hr />
                <div className="flex justify-between items-center text-lg mt-4">
                    <div>Total</div>
                    {subtotal == 0 ?
                        (<div className="font-black text-xl">${subtotal}</div>) : (<div className="font-black text-xl">${subtotal + 15}</div>)}
                </div>
                <button className="flex justify-content items-center w-150 mx-80"><Link to="/Ending">Go To Checkout</Link></button>
            </div>
        </div>
    );
}
export default Cart;