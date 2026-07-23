import './App.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react'

function Shop() {
    const [product, setProduct] = useState([]);
    const API = "https://fakestoreapi.com/products";

    const getdata = async () => {
        try {
            const res = await axios.get(API);
            setProduct(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    const sections = [];
    for (let i = 0; i < product.length; i += 3) {
        sections.push(product.slice(i, i + 3));
    }

    const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
    const [price, setPrice] = useState(200);
    const [check, setCheck] = useState(true);
    const [c, setC] = useState(true);
    const [p, setP] = useState(120);

    const style = (e) => {
        if (e.target.style.borderColor === "black") {
            e.target.style.borderColor = "";
        } else {
            e.target.style.borderColor = "black";
            e.target.style.borderWidth = "2px";
        }
    };

    const sizestyle = (e) => {
        const btn = e.currentTarget;
        if (btn.style.backgroundColor === "black") {
            btn.style.backgroundColor = "#F2F0F1";
            btn.style.color = "gray";
        } else {
            btn.style.backgroundColor = "black";
            btn.style.color = "white";
        }
    };

    useEffect(() => {
        if (price < p) {
            setCheck(false);
        } else {
            setCheck(true);
        }
    }, [price, p]);

    return (
        <div className="shopjsx">
            <div className="filter bg-[white]">
                <div className="filter-header">
                    <span>Filters</span>
                </div>
                <hr />
                <div className="filter-categories">
                    {categories.map((index) => (
                        <div className="filter-index-row" key={index}>
                            <a href="#">{index}</a>
                        </div>
                    ))}
                </div>
                <hr />
                <div>
                    <div className="filter-section">Price</div>
                    <input
                        type="range"
                        min="50"
                        max="200"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="price-slider"
                    />
                    <div className="price-labels">
                        <span>${50}</span>
                        <span>${price}</span>
                    </div>
                </div>
                <hr />
                <div className="colors">
                    <div className="filter-section1">colors</div>
                    <div className="c1header">
                        <div><button onClick={(e) => { style(e) }} className="c1"></button></div>
                        <div><button onClick={(e) => { style(e) }} className="c2"></button></div>
                        <div><button onClick={(e) => { style(e) }} className="c3"></button></div>
                        <div><button onClick={(e) => { style(e) }} className="c4"></button></div>
                        <div><button onClick={(e) => { style(e) }} className="c5"></button></div>
                    </div>
                    <div className="c1header">
                        <div><button onClick={(e) => { style(e) }} className="c6"></button></div>
                        <div><button onClick={(e) => { style(e) }} className="c7"></button></div>
                        <div><button onClick={(e) => { style(e) }} className="c8"></button></div>
                        <div><button onClick={(e) => { style(e) }} className="c9"></button></div>
                        <div><button onClick={(e) => { style(e) }} className="c10"></button></div>
                    </div>
                </div>
                <hr />
                <div className="size">
                    <div className="filter-section">Size</div>
                    <div className="headsize">
                        <div className="sizebuttons">
                            <button onClick={(e) => { sizestyle(e); setP(120); }}><div>XX-Small</div> </button>
                            <button onClick={(e) => { sizestyle(e); setP(130); }}><div>X-Small</div> </button>
                        </div>
                        <div className="sizebuttons">
                            <button onClick={(e) => { sizestyle(e); setP(140); }}><div>Small</div> </button>
                            <button onClick={(e) => { sizestyle(e); setP(150); }}><div>Medium</div> </button>
                        </div>
                        <div className="sizebuttons">
                            <button onClick={(e) => { sizestyle(e); setP(160); }}><div>Large</div> </button>
                            <button onClick={(e) => { sizestyle(e); setP(170); }}><div>X-Large</div> </button>
                        </div>
                        <div className="sizebuttons">
                            <button onClick={(e) => { sizestyle(e); setP(180); }}><div>XX-Large</div> </button>
                            <button onClick={(e) => { sizestyle(e); setP(190); }}><div>3X-Large</div> </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="dressstyle">
                    <div className="filter-section">Dress Style</div>
                    <a>Casual</a>
                    <a>Formal</a>
                    <a>Party</a>
                    <a>Gym</a>
                </div>
            </div>

            <div className="casual">
                {check ? (
                    <>
                        <div className="casualh1">Casual</div>
                        <div className="casualshop">
                            {sections.map((currentThree, sectionIdx) => (
                                <div className="shopcards-container" key={sectionIdx}>
                                    {currentThree.map((item) => (
                                        <Link to="/ItemDetails" key={item.id}>
                                            <div className="shopnd">
                                                <div className="im">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        style={{
                                                            width: '200px',
                                                            height: '200px',
                                                        }}
                                                    />
                                                </div>
                                                <div className="w-[22vw]">
                                                <div className="bold">{item.title}</div>
                                                <div className="rating-row bold">
                                                    ⭐⭐⭐⭐ <span>{item.rating?.rate}/5</span>
                                                </div>
                                                    <div className="bold">$ {item.price}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="checkerror"> Error. Pls search in some other range</div>
                )}
            </div>
        </div>
    );
}

export default Shop;