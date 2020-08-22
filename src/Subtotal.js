
// Creates the subtotal section at the side of the checkout page, includes SUM, GIFTS and PRODUCT

import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import {getBasketTotal} from "./Reducer";


function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat
                renderText = {( value ) => (
                    <>
                    <p>
                        Subtotal ({ basket.length } items ): <strong> { ` ${value}` }</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                    </>
                )}
                decimalState = {2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}

            />

            <button> Proceed to Checkout </button>
        </div>
    );
}

export default Subtotal;