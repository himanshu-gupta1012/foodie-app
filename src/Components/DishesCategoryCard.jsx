// import React from 'react'
import './DishesCategoryCard.css'
import { IoIosStar } from "react-icons/io";

const DishesCategoryCard = ({ name, rating, price, image}) => {
    return (
        <>
            {/* <div className="dishes-category-card">
                <img src={image} alt={image} />
                <p>{name}</p>
                <p>{rating}</p>
                <h3>{price}</h3>
            </div> */}

            <div className="dishes-category-list">
                    <div className="dishes-category-img">
                        <img src={image} alt={image} />
                    </div>
                    <div className="dishes-description">
                        <p>{name}</p>
                        <div className="dishes-des">
                            <p><IoIosStar color='goldenrod'/></p>
                            <p className='rate'>{rating}</p>
                        </div>
                    </div>
                    <div className="dishes-price">
                        <h2>₹{price}</h2>
                        <button className='dishes-btn'>Add to Cart</button>
                    </div>
                </div>
        </>
    )
}

export default DishesCategoryCard