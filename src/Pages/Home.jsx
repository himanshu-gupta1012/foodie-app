// import React from 'react'
import './Home.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { FaShop } from "react-icons/fa6";
import CategoryCard from '../Components/CategoryCard';
import DishesCategoryCard from '../Components/DishesCategoryCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import categories from '../data/categories.json'



const Home = () => {
    const [categories, setCategories] = useState([]);
    const [dishes, setDishes] = useState([]);

    const fetchCategories = async () => {
        try {
            const res = await axios.get('./data/categories.json')
            setCategories(res.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    const fetchDishes = async () => {
        try {
            const res1 = await axios.get('/data/dishes.json')
            setDishes(res1.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        fetchCategories()
        fetchDishes()
    },[])
    return (
        <>
            <main className="home-page">

                <section className="hero">

                    <div className="hero-content">
                        
                        <p className='tagline'>DELICIOUS FOOD FOR YOU</p>
                        
                        <h1>Good Food
                            <br />
                            <span>Good Mood</span>
                        </h1>
                        
                        <div className="statics-des">
                            <p>
                                Discover a variety of delicious food from the best <br />
                                restaurants. Fresh ingredients, great taste, <br />
                                delivered to your door.
                            </p>
                        </div>
                        
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

            <section className="food-category-outer">
                <div className="food-category-inner">
                    <h1>Food Categories</h1>
                    <p>View All <FaArrowRightLong /></p>
                </div>

                <div className="category-list">
                    {categories.map((item) => (
                        <CategoryCard
                            key={item.id}
                            name={item.name}
                            image={item.image}
                        />
                    ))}
                </div>
            </section>

            <section className='dishes-category-outer'>
                <div className="dishes-category-inner">
                    <h1>Popular Dishes</h1>
                    <p>View All <FaArrowRightLong /></p>
                </div>

                <div className="dishes-list">
                    {dishes.map((item)=> (
                        <DishesCategoryCard
                            key={item._id}
                            name={item.name}
                            rating={item.rating}
                            price={item.price}
                            image={item.image}/>
                    ))}
                </div>
            </section>

            <div className="lower-banner-outer">
                <div className="lower-banner-img">
                    <img src="\images\lowerbanner.png" alt="banner-img" />
                </div>

                <div className="banner-description">
                    <p className='p1-banner'>SPECIAL OFFER</p>
                    <h1>Get<span> 30%OFF</span></h1>
                    <p className='p2-banner'>On Your First Order</p>
                    <button className='banner-btn'>Order Now < FaArrowRightLong/></button>
                </div>
            </div>
        </>
    )
}

export default Home