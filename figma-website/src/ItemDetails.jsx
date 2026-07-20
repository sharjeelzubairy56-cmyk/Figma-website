import './Tailwind.css';
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import SIZE from './Context.jsx'
function ItemDetails() {
    const [price, setPrice] = useState(120);
    const [selectedSize, setSelectedSize] = useState('Small');
    const { setSize } = useContext(SIZE);
    const [value, setValue] = useState(1);
    const [base, setBase] = useState(120);
    const [cart, setCart] = useState(true);
    const priceselect = (e) => {
        if (e === 'Medium') {
            setPrice(130);
            setBase(130);
        }
        else if (e === 'Large') { setPrice(140); setBase(140); }
        else if (e === 'X-Large') { setPrice(150); setBase(150); }
        else { setPrice(120); setBase(120); }
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
        <div className="itemdetails tw-scope flex items-center justify-center mx-auto mt-16">
            <div className="idimage"><img src="shirt.jpg" height="100%" width="100%" alt="shirt" /></div>
            <div className="details leading-normal mr-16">
                <div className="tsdetail">T-Shirt with tape details</div>
                <div className="rating-row">⭐⭐⭐⭐ <span className="bold">3.5/5</span></div>
                <div className="pl-2 font-black text-2xl">${price}</div>
                <div className="text-gray-500 pl-2">This graphic t-shirt which is perfect for any occassion. Crafted from a <br /> soft and breathable fabric, it offers superior comfort and style</div>
                <hr />
                <div className="mt-4 pl-2 text-gray-500">Select Colors</div>
                <div className="flex pl-2 gap-2 h-14">
                    <button onClick={(e) => { style(e) }} className="w-9 h-9 p-0 m-0 mt-2 bg-emerald-800 rounded-full cursor-pointer border-0"></button>
                    <button onClick={(e) => { style(e) }} className="w-9 h-9 p-0 m-0 mt-2 bg-red-500 rounded-full cursor-pointer border-0"></button>
                    <button onClick={(e) => { style(e) }} className="w-9 h-9 p-0 m-0 mt-2 bg-sky-900 rounded-full cursor-pointer border-0"></button>
                </div>
                <hr />
                <div className="mt-4 pl-2 text-gray-500">Choose Size</div>
                <div className="flex pl-2 gap-2 h-14">
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
                        <button onClick={() => { setSize(selectedSize); setCart(false); }} className="cursor-pointer w-[62%] h-[55%] bg-black">{cart?("Add to cart"):("Added to cart")}</button>
                </div>
            </div>
        </div>
         <div className="newarrivals">
          <div className="na">YOU MIGHT ALSO LIKE</div>
          <div className="cards-container">
              <Link to="/ItemDetails">
                  <div className="nd">
                      <div className="im"><img src="/shirt.jpg" height="100%" width="100%" /></div>
                      <div className="bold">T-Shirt with tape details</div>
                      <div class="rating-row">⭐⭐⭐⭐ <span className="bold">3.5/5</span></div>
                      <div className="bold">$ 120</div>
                  </div>
              </Link>
              <Link to="/ItemDetails">
                  <div className="nd">
                      <div className="im"><img src="/shirt.jpg" height="100%" width="100%" /></div>
                      <div className="bold">T-Shirt with tape details</div>
                      <div class="rating-row">⭐⭐⭐⭐ <span className="bold">3.5/5</span></div>
                      <div className="bold">$ 120</div>
                  </div>
              </Link>
              <Link to="/ItemDetails">
                  <div className="nd">
                      <div className="im"><img src="/shirt.jpg" height="100%" width="100%" /></div>
                      <div className="bold">T-Shirt with tape details</div>
                      <div class="rating-row">⭐⭐⭐⭐ <span className="bold">3.5/5</span></div>
                      <div className="bold">$ 120</div>
                  </div>
              </Link>
              <Link to="/ItemDetails">
                  <div className="nd">
                      <div className="im"><img src="/shirt.jpg" height="100%" width="100%" /></div>
                      <div className="bold">T-Shirt with tape details</div>
                      <div class="rating-row">⭐⭐⭐⭐ <span className="bold">3.5/5</span></div>
                      <div className="bold">$ 120</div>
                  </div>
              </Link>
          </div>
          <div>
              <Link to="/Shop"><center><button className="view">View All</button> </center></Link>
          </div>
      </div>
      </>
    );
}

export default ItemDetails;