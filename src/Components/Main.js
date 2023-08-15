import logo from "../Components/img/logo192.png" 
import ItemListContainer from "./ItemListContainer"

function Main () {

    return(
    
    <main>
      <h2>Home</h2>
      <ItemListContainer
      saludo="Bienvenido a MiHogar!"
      slogan="Transformando espacios, creando hogares."
      />
      <img src={logo} alt="logo"/>
    </main>
    )
    }
    
    export default Main