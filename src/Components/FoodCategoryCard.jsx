// import React from 'react'
import './FoodCategoryCard.css'
import { IoIosStar } from "react-icons/io";

const FoodCategoryCard = ({ name, description, rating, price, image }) => {
    return (
        <>
            <div className="food-container-outer">
                <div className="food-container-inner">
                    <div className="food-image">
                        <img src={image} alt={image} />
                    </div>

                    <div className="food-details">
                        <p className='food-name'>{name}</p>
                        <p className='food-description'>{description}</p>
                        <p className='food-rating'><IoIosStar /> {rating}</p>
                        <h2 className='food-price'>₹{price}</h2>
                    </div>
                    <button className='food-btn'>Add</button>
                </div>
            </div>
        </>
    )
}

export default FoodCategoryCard