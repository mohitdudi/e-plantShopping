import React, { useState } from 'react'
import "./ProductList.css"
import cartIcon from "../assets/cartIcon.svg"
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getPlantList } from './PlantList'
import { addToCart } from '../redux/CartSlice'

function Header() {
  const cartSize = useSelector((state) => (state.cart.size));

  return (
    <div className='navbar'>
      <div className="logo">
        <div className="logo-wrapper">
          <Link to="/e-plantShopping/">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
          </Link>
        </div>

        <div className="text-wrapper">
          <span className='logo-head'><b>Paradise Nursery</b></span>
          <p className='logo-sub'>Where green meets serenity</p>
        </div>
      </div>

      <div className="page-head">
        <h2>Plants</h2>
      </div>

      <div className="cart-icon">
        <p className="cart-size">{cartSize}</p>
        <Link to="/e-plantShopping/cart"><img src={cartIcon} alt="" /></Link>
      </div>
      
    </div>
  )
}

function Plant({plant}) {
  const dispatch = useDispatch();
  const [isPressed, setIsPressed] = useState(false);
  return (
    <div className='plant-card'>
      {/* <span className='sale-icon'>SALE</span> */}
      <img src={plant.image} alt="" />

      <p><b>{plant.name}</b></p>
      <p>{plant.cost}</p>
      <p><i>{plant.description}</i></p>

      <button className='add-cart-btn' disabled={isPressed} onClick={() => {
        setIsPressed(true);
        dispatch(addToCart(plant));
      }}> {isPressed ? "Added to Cart" : "Add to Cart" }</button>
      
    </div>
  )
}



export default function ProductList() {
  const plantList = getPlantList();

  return (
    <div className='product-page'>
      <Header />

      {
        plantList.map((plantCat, catIndex) => (
          <div className="plant-category" key={catIndex}>
            <h1 className='category-head'>{plantCat.category}</h1>
            

            <div className="plant-list">
              {
                plantCat.plants.map((plant, plantIndex) => (
                  <Plant plant={plant} key={plantIndex}/>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

