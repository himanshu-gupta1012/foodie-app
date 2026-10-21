// import React from 'react'
import './CategoryCard.css'

const CategoryCard = ({ name, image }) => {
    return (
        <>
            <div className="category-card">
                <img src={image} alt={name} />
                <h4>{name}</h4>
            </div>
        </>
    )
}

export default CategoryCard