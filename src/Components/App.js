import {BrowserRouter} from "react-router-dom"
import contents from "./content"
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Item from './Item';



function App() {

  return (
<BrowserRouter>
  <Header />
  <Main />
  <div className="App">
    {contents.map(contents => (
      <Item
        key={contents.id}
        image={contents.img}
        name={contents.name}
        price={contents.price}
        totalSales={contents.totalSales}
        timeLeft={contents.timeLeft}
        rating={contents.rating}

       />
    ))}
  </div>
  <h2>Contactanos</h2>
  <Footer />
</BrowserRouter>
  );
}

export default App;
