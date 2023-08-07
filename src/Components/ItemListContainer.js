import React from 'react'


function ItemListContainer(greeting) {
  return (
    <>
    <h2>{greeting.saludo}</h2>
    <h4>{greeting.slogan}</h4>
    </>
  )
}

export default ItemListContainer