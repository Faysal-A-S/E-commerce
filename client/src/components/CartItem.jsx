import React from "react";
import TextShortener from "../utils/TextShortener";
import ButtonGroup from "./ButtonGroup";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/Cart/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div
      style={{
        borderTop: "1px solid #343a40",
        display: "flex",
      }}
      className="bg-dark"
    >
      <div style={{ margin: "20px" }}>
        <img
          src={item.url}
          alt="product"
          style={{ height: 110, width: 110 }}
          className="ms-2"
        />
        <ButtonGroup className="align-self-center" />
      </div>
      <div style={{ margin: "20px" }}>
        <p style={{ marginLeft: "5px", fontSize: 22 }}>
          {TextShortener(item.title.longTitle)}
        </p>
        <div className="d-flex " style={{ margin: "20px 5px" }}>
          <p style={{ fontWeight: 600, fontSize: 18 }}>৳{item.price.cost}</p>
          &nbsp;&nbsp;&nbsp;
          <p style={{ color: "#878787" }} className="align-self-center">
            <strike>৳{item.price.mrp}</strike>
          </p>
          &nbsp;&nbsp;&nbsp;
          <p style={{ color: "#388E3c" }} className="align-self-center">
            {item.price.discount}
          </p>
        </div>
        <button
          className="btn mt-2 fs-5  fw-bold  remove "
          onClick={() => handleRemove(item._id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
