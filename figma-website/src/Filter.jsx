import './App.css'
import { useState } from "react";
const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];


function Filter() {
    const [price, setPrice] = useState(200);
    const [check, setCheck] = useState(false);
    const style = (e) => {
        if (e.target.style.borderColor === "black") {
            e.target.style.borderColor = "";
            e.target.style.borderWidth = "";
        } else {
            e.target.style.borderColor = "black";
            e.target.style.borderWidth = "1px";
        }
    };
    return (
        <div className="filter">
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
                    <div><button onClick={(e) => { style(e)}} className="c1"></button></div>
                    <div><button onClick={(e) => { style(e)}} className="c2"></button></div>
                    <div><button onClick={(e) => { style(e)}} className="c3"></button></div>
                    <div><button onClick={(e) => { style(e)}} className="c4"></button></div>
                    <div><button onClick={(e) => { style(e)}}  className="c5"></button></div>
                </div>
                <div className="c1header">
                    <div><button onClick={(e) => { style(e)}} className="c6"></button></div>
                    <div><button onClick={(e) => { style(e)}} className="c7"></button></div>
                    <div><button onClick={(e) => { style(e)}} className="c8"></button></div>
                    <div><button onClick={(e) => { style(e)}} className="c9"></button></div>
                    <div><button onClick={(e) => { style(e)}} className="c10"></button></div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Filter;