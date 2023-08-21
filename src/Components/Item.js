import {FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt} from "react-icons/fa";

function Item(props) {
  return(
    <div className="ItemList">
      <div key={props.id} className="productCard"></div>
        <img src={props.img} alt="product-img" className="productImage"></img>

        <FaShoppingCart className={"productCard_cart"} />
        <FaRegBookmark className={"productCard_wishlist"} />
        <FaFireAlt className={"productCard_fastSelling"} />

        <div className="productCard_content">
          <h3 className="productName">{props.name}</h3>
          <div className="displayStack_1">
            <div className="productPrice">${props.price}</div>
            <div className="productSales">{props.totalSales} units sold</div>
          </div>
          <div className="displayStack_2">
            <div className="productRating">
              {[...Array(props.rating)].map((index) => (
                <FaStar id={index + 1 } key={index} />
              ))}
            </div>
            <div className="productTime">{props.timeLeft} days left</div>
          </div>
      </div>
    </div>
  )

}

export default Item