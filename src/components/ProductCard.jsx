import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";




function ProductCard({ product }) {

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = cart.some((item) => item.id === product.id);

  


  return (

    <div className="productCard image-zoom-effect">

      <div className="lftColumn image-holder">
        <img className="img-fluid" src={product.image} />
      </div>

      <div className="rgtColumn">
        <h2>{product.title}</h2>
        <p className="desc">{product.description}</p>
        <p className="pricePro">${product.price}</p>

        <button
          className={`btn ${isInCart ? "btn-danger" : "btn-primary"}`}
          onClick={() =>
            isInCart ? removeFromCart(product.id) : addToCart(product)
          }
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>

      </div>

    </div>

  );
}

export default ProductCard;