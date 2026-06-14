import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Cart.css"
import { increaseQty, decreaseQty, removeItem } from '../redux/CartSlice';

function calculateTotal(cartItems) {
    let total = 0;

    cartItems.map((item) => (
        total += itemTotal(item)
    ))
    return total;
    
}

function itemTotal(item) {
    return (Number(item.cost.replace("$", "")) * item.quantity)

}

function CartItem({item, index}) {
    const dispatch = useDispatch();

    return (
        <div className='cart-item'>
            <img src={item.image} alt="" />

            <div className="text">
                <h2>{item.name}</h2>
                <p>{item.cost}</p>

                <div className="manip">
                    <button className='cart-btn' onClick={() => (dispatch(decreaseQty(index)))}>-</button>
                    <span className='cart-qty'>{item.quantity}</span>
                    <button className='cart-btn' onClick={() => (dispatch(increaseQty(index)))}>+</button>
                </div>

                <p><b>Total: {itemTotal(item)}</b></p>

                <button className='cart-remove-btn' onClick={() => (dispatch(removeItem(index)))}>Delete</button>
            </div>

        </div>
    )
}

export default function Cart() {
const cartItems = useSelector((state) => (state.cart.items));
  return (
    <div className='cart-page'>
      <h1>Cart</h1>

      <p>Total Cart Amount: ${calculateTotal(cartItems)}</p>

      <div className="cart-list">
        {
            cartItems.map((item, index) => (
                <CartItem item={item} index={index} key={index}/>
            ))
        }
      </div>
    </div>
  )
}
