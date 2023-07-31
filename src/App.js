import Header from './Header'
import Footer from './Footer'

function App() {

  let nombre = "Ivana"

  return (

<>
  <Header />

    <main>
      <h2>Home</h2>
      <p>Bienvenido {nombre}</p>

    </main>

    <Footer />

</>
  );
}

export default App;
