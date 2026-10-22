// import React from 'react'
import './Menu.css'
import { CiSearch } from "react-icons/ci";
import FoodCategoryCard from '../Components/FoodCategoryCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
  const [food, setFood] = useState([])

  const fetchFood = async () => {
    try {
      const res = await axios.get('./data/foods.json')
      setFood(res.data)

    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=> {
    fetchFood()
  },[])

  return (
    <>
        <main className='menu-page'>
          <section className='menu'>
            <div className="menu-image">
              <img src="\images\menumain.png" alt="" />
            </div>

            <div className="menu-content">
              <p className='menu-img-para1'>Delicious Food</p>
              <h1 className='menu-img-header'>Explore Our <span>Menu</span></h1>
              <p className='menu-img-para2'>Fresh ingredients,great taste and a variety of dishes <br />made to satisfy your cravings.</p>
            </div>
          </section>
        </main>

        <div className="main-search">
          <p className='dish-p'><CiSearch size={20} /></p>
          <input type="search" placeholder='Search for dishes...' className='dish-search'/>
          <select name="" id="" className='dish-list'>
            <option value="" selected disabled>Sort by: Popular</option>
            <option value="">Noodles</option>
            <option value="">Pasta</option>
            <option value="">Biryani</option>
            <option value="">Cold-drinks</option>
            <option value="">Pizza</option>
            <option value="">Burger</option>
            <option value="">Cake</option>
            <option value="">French Fries</option>
          </select>
        </div>

        <div className="food-list">
          {
            food.map((item)=> (
              <FoodCategoryCard 
              key={item._id}
              name={item.name}
              description={item.description}
              rating={item.rating}
              price={item.price}
              image={item.image}/>
            ))
          }
        </div>
    </>
  )
}

export default Menu