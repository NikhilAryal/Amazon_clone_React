import React, {Component} from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import './Reducer';
import { auth } from './Firebase';

function Header() {
        const [{ basket, user }] = useStateValue();

        // console.log(basket);
        // code logic to switch login and logout by clicking the tab
        const login = () => {
            if (user) {
                auth.signOut();
            }
        }

        return (
            <nav className="header">
                <Link to="/">
                    <img className="header__logo"
                         src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                         alt="amazon_image" />
                </Link>

                <div className="header__search">
                    <input type="text" className="header__searchInput"/>
                    {/* material-ui installed for this part  */}
                    <SearchIcon className="header__searchIcon" />
                </div>


                <div className="header__nav">
                    {/*links here*/}
                    <Link to={ !user && '/login' } className="header__link">
                        <div  onClick={ login }  className="header__option">
                            <span className="header__optionLineOne"> Hello {user?.email} </span>
                            <span className="header__optionLineTwo"> {user ? 'Sign Out' : 'Sign in!'}</span>
                        </div>
                    </Link>

                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns </span>
                            <span className="header__optionLineTwo">& Orders </span>
                        </div>
                    </Link>

                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                        </div>
                    </Link>

                    {/* Header Basket icon */}
                    <Link to="/checkout" className="header__checkout">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className="header__optionLineTwo header__basketCount" > {basket?.length} </span>
                        </div>
                    </Link>

                </div>
                {/*logo on left, searchbar, 3 links , carts&login*/}

            </nav>
        );
}

export default Header;