// import React from 'react'
import './Home.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { FaShop } from "react-icons/fa6";



const Home = () => {
    return (
        <>
            <main className="home-page">

                <section className="hero">

                    <div className="hero-content">
                        {/* Tagline */}
                        <p className='tagline'>DELICIOUS FOOD FOR YOU</p>
                        {/* Main heading */}
                        <h1>Good Food
                            <br />
                            <span>Good Mood</span>
                        </h1>
                        {/* Description */}
                        <div className="statics-des">
                            <p>
                            Discover a variety of delicious food from the best <br />
                            restaurants. Fresh ingredients, great taste, <br />
                            delivered to your door.
                        </p>
                        </div>
                        {/* Order Now button */}
                        <button className='hero-btn'>Order Now <FaArrowRightLong /></button>
                        {/* Statistics */}
                        <div className="hero-statics">
                            <div className="statics-info">
                                <div className="statics-heading">
                                    <IoPeople color='red' size={20} />
                                    <h3>2K+</h3>
                                </div>
                                <p className='statics-p'>Happy Customers</p>
                            </div>

                            <div className="statics-info">
                                <div className="statics-heading">
                                    <ImSpoonKnife color='red' size={20} />
                                    <h3>500+</h3>
                                </div>
                                <p className='statics-p'>Food Items</p>
                            </div>

                            <div className="statics-info">
                                <div className="statics-heading">
                                    <FaShop color='red' size={20} />
                                    <h3>50+</h3>
                                </div>
                                <p className='statics-p'>Restaurants</p>
                            </div>

                        </div>
                    </div>

                    <div className="hero-image">
                        <img src="/images/i1.png" alt="" />
                    </div>

                </section>

            </main>
        </>
    )
}

export default Home