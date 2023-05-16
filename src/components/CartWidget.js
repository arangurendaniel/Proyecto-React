import React from 'react';
import '../stylesheets/CartWidget.css'

function CartWidget() {
  return (
    <div className='cartWidget-container'>
        <i className="bi bi-cart-fill"></i>
        <div className='contador'>0</div>
    </div>
  )
}

export default CartWidget