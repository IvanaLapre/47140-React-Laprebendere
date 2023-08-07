import React from 'react'

function Navlinks(parametros) {

    console.log(parametros)

  return (
    <nav>
    <a href="#">{parametros.nombre}</a>
    <a href="#">link</a>
    <a href="#">link</a>
  </nav>
  )
}

export default Navlinks