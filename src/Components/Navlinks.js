import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import React from 'react'

function Navlinks(parametros) {

    console.log(parametros)

    return (
      <nav className="flex gap-4">
          <NavLink className="nav__link" to="/cat/1">Productos</NavLink>
          <NavLink className="nav__link" to="/cat/2">Servicios</NavLink>
          <NavLink className="nav__link" to="/cat/3">Contactanos</NavLink>
          <CartWidget/>
      </nav>
  )
}

export default Navlinks