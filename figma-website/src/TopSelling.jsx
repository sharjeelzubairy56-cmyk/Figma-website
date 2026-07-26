import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NewArrivals() {
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
    for (let i = 0; i < product.length; i += 4) {
        sections.push(product.slice(i, i + 4));
    }

    return (
        <>
            {sections.map((currentFour, index) => (
                <div className="newarrivals" key={index}>
                    <div className="na">Top Arrivals</div>
                    <div className="cards-container">
                        {currentFour.map((item) => (
                            <Link to="/ItemDetails" state={{ index: item.id }} key={item.id}>
                                <div className="nd">
                                    <div className="im">
                                        <img src={item.image} alt={item.title} height="100%" width="100%" />
                                    </div>
                                    <div className="bold">{item.title}</div>
                                    <div className="rating-row">
                                        ⭐⭐⭐⭐ <span className="bold">{item.rating?.rate}/5</span>
                                    </div>
                                    <div className="bold">${item.price}</div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div>
                        <Link to="/Shop">
                            <center><button className="view">View All</button></center>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

export default NewArrivals;