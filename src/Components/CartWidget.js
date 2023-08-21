
import cart from '../img/shopping_cart.svg';

function CartWidget() {
  return (
    <div>
        <img src={cart} className="cart" alt="cart"></img>
        <span>1</span>
    </div>
  )
}

export default CartWidget