import Navlinks from "./Navlinks"
import CartWidget from "./CartWidget"
 function Header () {

return(

<header id="header" className="header flex justify-between py-4 px-2 bg-green-900 text-white">
  <h1>MiHogar</h1>
  <Navlinks/>
  <CartWidget/>
</header>

)
}

export default Header