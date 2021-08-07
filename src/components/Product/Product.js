import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="productName">{name}</h4>
        <br />
        <p>
          <small>{seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock-order sooon</small>
        </p>
        <button
          className="cart-btn"
          onClick={() => props.handleProduct(props.product)}
        >
          add to cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
