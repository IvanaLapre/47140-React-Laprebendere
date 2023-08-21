import React from 'react'
import ItemCount from './ItemCount'


function ItemListContainer(greeting) {
  return (
    <>
    <h2>{greeting.saludo}</h2>
    <h4>{greeting.slogan}</h4>
    <ItemCount/>
    </>
  )
}

export default ItemListContainer