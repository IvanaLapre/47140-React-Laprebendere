import React from 'react'

function Navlinks(parametros) {

    console.log(parametros)

  return (
    <nav className='flex gap-4'>
    <a href="#">{parametros.vuelos}</a>
    <a href="#">{parametros.hoteles}</a>
    <a href="#">{parametros.transportes}</a>
  </nav>
  )
}

export default Navlinks