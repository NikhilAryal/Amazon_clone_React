import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__Image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                 alt="amazon-prime-wallpaper"/>
        {/*   creating products id titles nada nada */}

            <div className="home__row">
                <Product
                    id = '1234567'
                    title = "Becoming Duchess Goldblatt "
                    price = {16.50}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/41blK3c+kbL._SY344_BO1,204,203,200_.jpg"
                />
                <Product
                    id = '12345678'
                    title = "Dreyer's English: An Utterly Correct Guide to Clarity and Style"
                    price = {20.0}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/41pOez1GNgL._SX329_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id = '12345679'
                    title = "AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                    price = {56.25}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
                />
                <Product
                    id = '12345887'
                    title = "Strathmore 455-3 400 Series Sketch Pad, 9x12 Wire Bound, 100 Sheets"
                    price = {30.50}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71%2BQK5pJQmL._AC_SL1200_.jpg"
                />
                <Product
                    id = '12345677'
                    title = "Harry porter movie series 1080p blu-ray collection"
                    price = {160.50}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/91%2B45-S6hfL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id = '12345671'
                    title = "HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                    price = {130.50}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SY879_.jpg"
                />
            </div>


        </div>
    );
}

export default Home;