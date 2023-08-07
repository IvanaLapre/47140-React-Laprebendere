import React from 'react'
import carrito from "../Components/img/carrito.png" 

function CartWidget() {
  return (
    <>
    <img src={carrito} alt="carrito" class="w-8"/>
    <p>{1}</p>
    </>
  )
}

export default CartWidget