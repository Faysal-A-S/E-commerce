import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBolt } from "@fortawesome/free-solid-svg-icons";
const ProductImage = ({ product }) => {
  return (
    <div>
      <img
        className="product-leftContainer-Img"
        src={product.detailUrl}
        alt=""
      />
      <button
        className="btn btn-warning product-button "
        style={{ marginRight: "3%" }}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        Add To Cart
      </button>
      <button className="btn btn-warning product-button ">
        <FontAwesomeIcon icon={faBolt} />
        Buy Now
      </button>
    </div>
  );
};

export default ProductImage;
