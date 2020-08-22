import React from 'react';
import './Product.css';
import {useStateValue} from "./StateProvider";

function Product({id, title, price, rating, image }) {                     {/* accessed through props */}
    const [{basket}, dispatch] = useStateValue();                                {/* not necessary tho */}

    const addToBasket = () => {
        // add to basket
        dispatch ({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p> { title } </p>
                <p className="product__price">
                    <small> $ </small>
                    <strong> { price }  </strong>
                </p>
                <p className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_)=>(
                                <p> ⭐ </p>
                            ))
                    }
                </p>
            </div>
            <img src= {image} alt="" />
            <button onClick= {addToBasket}> Add to basket </button>
        </div>
    );
}

export default Product;