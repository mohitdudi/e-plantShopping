import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className='home overlay'>
      <div className="landing-page">
        <div className="left">
            <h1 className='main-heading'>Welcome to Paradise Nursery</h1>
            <p className='sub-text'>Where Green Meets Serenity</p>

            <Link to="/products">
            <button className='get-started-btn'>Get Started</button></Link>
        </div>

        <div className="buffer"></div>

        <div className="right">
          <p className="about-us-content">
          At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.
        </p>

          <p className="about-us-content">
            Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.
          </p>


          <p className="about-us-content">
            Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.
          </p>
        </div>

        
      </div>
    </div>
  )
}
