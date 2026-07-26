import axios from 'axios';
import { useEffect, useState } from 'react';

function Products() {
    const [ind, setInd] = useState();
    const [arr, setArr] = useState([])
    const [products, setProducts] = useState([]);
    const [check, setCheck] = useState(false);
    const API = "https://fakestoreapi.com/products";
    const array = (e) => {
        setArr(prev => [...prev, e]);
    }
    const delarray = (e) => {
        setArr(prev => prev.filter((_, i) => i !== e));
    };
    const getdata = async () => {
        try {
            const res = await axios.get(API);
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    };
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

    return (
        <>
            {products.map((product, index) => (

                <div className="flexx" key={product.id} >
                    <button onClick={() => { i(index); fun(); }}>
                        <div>The id is {product.id}</div>
                        <div>The title is {product.title}</div>
                        <div>The price is {product.price}</div>
                        <div>The description is {product.description}</div>
                        <div>The category is {product.category}</div>
                        <div>
                            <b>The image is:</b>
                            <img src={product.image} alt={product.title} width="100" />
                        </div>
                        <div>The rate is {product.rating?.rate}</div>
                        <div>The count is {product.rating?.count}</div>
                        <hr />
                    </button>
                </div>

            ))}
            {check && (
                <>
                    <h1>HI I am the product details</h1>
                    <div>The id is {products[ind].id}</div>
                    <div>The title is {products[ind].title}</div>
                    <div>The price is {products[ind].price}</div>
                    <div>The description is {products[ind].description}</div>
                    <div>The category is {products[ind].category}</div>
                    <div>
                        <b>The image is:</b>
                        <img src={products[ind].image} alt={products[ind].title} width="100" />
                    </div>
                    <div>The rate is {products[ind].rating?.rate}</div>
                    <div>The count is {products[ind].rating?.count}</div>
                    <button onClick={()=>array(ind)}>Add to cart</button>
                    <hr />
                </>
            )
            }
            {arr.length == 0 ? (<div>Sorry nothing is in the cart rn</div>) : (
                    arr.map((index,i) => (
                        <>
                            <h1>HI I am the cart</h1>
                            <div key={i}>The id is {products[index].id}</div>
                            <div>The title is {products[index].title}</div>
                            <div>The price is {products[index].price}</div>
                            <div>The description is {products[index].description}</div>
                            <div>The category is {products[index].category}</div>
                            <div>
                                <b>The image is:</b>
                                <img src={products[index].image} alt={products[index].title} width="100" />
                            </div>
                            <div>The rate is {products[index].rating?.rate}</div>
                            <div>The count is {products[index].rating?.count}</div>
                            <button onClick={()=>delarray(i)}>delete</button>
                            <hr />
                        </>
                    ))
            )}
        </>
    );
}

export default Products;