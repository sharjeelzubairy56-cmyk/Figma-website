import './Tailwind.css';
import { Link,useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import SIZE from './Context.jsx'
import axios from 'axios';
function ItemDetails() {
    const location = useLocation();
    const productIndex = location.state?.index;
    const index = productIndex !== undefined ? productIndex - 1 : 0;
    const [selectedSize, setSelectedSize] = useState('Small');
    const { setSize } = useContext(SIZE);
    const [value, setValue] = useState(1);
    const [base, setBase] = useState(120);
    const [cart, setCart] = useState(true);
    const [ind, setInd] = useState();
    const [products, setProducts] = useState([]);
    const [check, setCheck] = useState(false);
    const [price, setPrice] = useState();
    const API = "https://fakestoreapi.com/products";
    const getdata = async () => {
        try {
            const res = await axios.get(API);
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (products.length > 0 && products[index]) {
            setPrice(products[index].price);
            setBase(products[index].price);
        }
    }, [products, index]);
    const fun = () => {
        if (!check) { setCheck(true); }
        else { setCheck(false); }
    };
    const i = (e) => {
        setInd(e);
    };
    useEffect(() => {
        getdata();
    }, []);
    const priceselect = (e) => {
        if (e === 'Medium') {
            setPrice(products[index]?.price +10);
            setBase(products[index]?.price +10);
        }
        else if (e === 'Large') { setPrice(products[index]?.price + 20); setBase(products[index]?.price +20); }
        else if (e === 'X-Large') { setPrice(products[index]?.price + 30); setBase(products[index]?.price+30); }
        else { setPrice(products[index]?.price); setBase(products[index]?.price); }
    }
    const style = (e) => {
        if (e.target.style.borderColor === "black") {
            e.target.style.borderColor = "";
            e.target.style.borderWidth = "0";
            e.target.style.borderStyle = "";
        } else {
            e.target.style.borderColor = "black";
            e.target.style.borderWidth = "4px";
            e.target.style.borderStyle = "solid";
        }
    };

    const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

    return (
        <>
        <div className="itemdetails flex items-center justify-center m-16">
                <div className="idimage"><img src={products[index]?.image} height="100%" width="100%" alt="shirt" /></div>
            <div className="details leading-normal ml=12 mr-13">
                    <div className="tsdetail">{ products[index]?.title}</div>
                    <div className="rating-row">⭐⭐⭐⭐ <span className="bold">{products[index]?.rating?.rate}</span></div>
                    <div className="pl-2 font-black text-2xl">$ {price} </div>
                    <div className="text-gray-500 pl-2">{products[index]?.description}</div>
                    <br/>
                <hr />
                <div className="mt-1 pl-2 text-gray-500">Select Colors</div>
                <div className="flex mb-2 pl-2 gap-2 h-14">
                    <button onClick={(e) => { style(e) }} className="w-9 h-9 p-0 m-0 mt-2 bg-emerald-800 rounded-full cursor-pointer border-0"></button>
                    <button onClick={(e) => { style(e) }} className="w-9 h-9 p-0 m-0 mt-2 bg-red-500 rounded-full cursor-pointer border-0"></button>
                    <button onClick={(e) => { style(e) }} className="w-9 h-9 p-0 m-0 mt-2 bg-sky-900 rounded-full cursor-pointer border-0"></button>
                </div>
                <hr />
                <div className="mt-1 pl-2 text-gray-500">Choose Size</div>
                <div className="flex mb-3 pl-2 gap-2 h-14">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => { setSelectedSize(size); priceselect(size); }}
                            className={`w-22 h-8 p-0 m-0 mt-2 rounded-full cursor-pointer border-0 transition-colors ${selectedSize === size
                                    ? 'bg-black text-white'  
                                    : 'bg-[#F0F0F0] text-gray-600'  
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
                <hr />
                <div className="flex items-center justify-center h-20 gap-4">
                        <button className="cursor-pointer pl-1 w-[32%] h-[55%] bg-[#F0F0F0] border-0 text-gray-600 gap-3">
                            <button onClick={() => { setValue(value > 1 ? prev=>prev - 1 : 1); setPrice(base * (value-1)); }} className="cursor-pointer h-auto text-10x1 bg-[#F0F0F0] border-0 text-black font-black">➖</button>
                            {value}
                            <button onClick={() => { setValue(prev=>prev + 1); setPrice(base * (value+1)); }} className="cursor-pointer h-[10%]  text-10x1 bg-[#F0F0F0] border-0 text-black font-black">➕</button>
                        </button>
                        <button
                            onClick={() => { setSize({ index: index, size: selectedSize }); setCart(false); }}
                            className="cursor-pointer w-[62%] h-[55%] bg-black"
                        >
                            {cart ? ("Add to cart") : ("Added to cart")}
                        </button>
                </div>
            </div>
        </div>
      </>
    );
}

export default ItemDetails;