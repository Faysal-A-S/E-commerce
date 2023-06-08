import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBolt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/Cart/CartSlice";
const ProductImage = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cquantity = 1;
  const handleCart = () => {
    dispatch(addItem({ ...product, cquantity }));
    navigate("/cart");
  };
  return (
    <div>
      <img
        className="product-leftContainer-Img"
        src={product.detailUrl}
        alt=""
        style={{ height: "600px" }}
      />
      <button
        className="btn btn-warning product-button "
        style={{ marginRight: "3%" }}
        onClick={handleCart}
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
