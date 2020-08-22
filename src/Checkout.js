import React from 'react';
import {useStateValue} from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js';
//import initialState()
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout() {
    // Get me the basket here
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout" >
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

                { basket?.length ===0 ? (
                    <div>
                        <h2>OOPS, Your basket is empty !</h2>
                        <p>Find something to shop in the page and checkout through this page.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping basket </h2>
                        {/*    List of all checkout products    */}
                        {/*    const {item } = this.state*/}

                        { basket.map( item => (

                            <CheckoutProduct
                                id =    {item.id}
                                title = {item.title}
                                price = {item.price}
                                image = {item.image}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>

            { basket.length !== 0 && (
                <div className="checkout__right">
                    <Subtotal />
                    {/*<h1>Subtotal</h1>*/}
                </div>
            )}
        </div>
    );
}

// react-currency-format installed for checkout pricing thing

export default Checkout;