import NavBar from "./NavBar"
import Navlinks from "./Navlinks"

 function Header () {

return(

<header id="header" className="header flex justify-between py-4 px-2 bg-slate-800 text-white">
  <h1>Volando!</h1>
  <Navlinks
    nombre= "ivana"
    edad={26}
    />
  <NavBar/>
</header>

)
}

export default Header