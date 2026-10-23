// import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
            <div className="about-container-outer">
                <div className="about-banner-img">
                    <img src="images\abouthero.png" alt="" />
                </div>

                <div className="about-banner-description">
                    <p className='about-banner-para1'>About us</p>
                    <h1 className='about-banner-header'>GOOD FOOD <br /> GOOD<span> MOOD</span></h1>
                    <p className='about-banner-para2'>At Foodie, we believe great food brings people together. <br /> Our mission is to make delicious food accessible <br /> to everyone, anytime, anywhere.</p>
                </div>
            </div>

            <div className="about-main-outer">
                <div className="about-main-left">
                    <p className='about-main-para1'>Our Story</p>
                    <h1 className='about-main-header'>From a Small <br /> Kitchen <br /> to Your Doorstep</h1>
                    <p className='about-main-para2'>Foodie started with a simple idea - to serve delicious, <br />
                    high-quality food that makes people happy. What began <br />
                    as a small kitchen with big dreams has now become a <br />
                    trusted food delivery platform, loved by thousands of <br />
                    foodies across the city.</p>

                    <button className='about-main-btn'>Our Menu</button>
                </div>
                <div className="about-main-right">
                    <div className="about-main-img">
                        <img src="images\mainimg.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About