
//Includes the logic for adding and removing items to basket along with initializing the basket

import Product from "./Product";
//import React from "react";
//import CheckoutProduct from "./CheckoutProduct";



export const initialState = {
      basket: [    //{
     //     id: '1234567',
     //     title: "Becoming Duchess Goldblatt ",
     //     price: 16.50,
     //     rating: 4,
     //     image: "https://images-na.ssl-images-amazon.com/images/I/41blK3c+kbL._SY344_BO1,204,203,200_.jpg",
     // }, {
     //     id: '1234567',
     //     title: "Becoming Duchess Goldblatt ",
     //     price: 16.50,
     //     rating: 4,
     //     image: "https://images-na.ssl-images-amazon.com/images/I/41blK3c+kbL._SY344_BO1,204,203,200_.jpg",
     // }
    ],
    user: null
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount, 0);


function reducer (state, action) {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'ADD_TO_BASKET':
            // LOGIC FOR ADDING ITEMS TO BASKET
            return { ...state,
            //    Along with original state, newly added items i.e org state + new one
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET' :
            // LOGIC FOR REMOVING STUFFS
            let newBasket = [...state.basket];                          // Original content of available basket, a clone

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                // some item exists in basket , so remove it
                newBasket.splice(index, 1);
            } else {
                console.warn('Cant remove product (id: ${action.id}) as it is not in the basket ');
            }

            return { ...state,
                    basket: newBasket
            };

        default:
            return state;

    }
}

export default reducer;

// ...state returns whatever the current state of the basket is