import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartPriceDetails from "../components/CartPriceDetails";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart);

  return (
    <div className="container text-white pt-4">
      {cartItem.length > 0 ? (
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12">
            <p className="cart-header bg-dark" style={{ marginBottom: "0px" }}>
              My Cart ({cartItem.length})
            </p>
            {cartItem.map((item) => (
              <CartItem item={item} key={item._id} />
            ))}
            <div className="place-order bg-dark p-3 ">
              <button className="btn btn-warning place-order-button fw-bold">
                Place Order
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <CartPriceDetails cartItem={cartItem} />
          </div>
        </div>
      ) : (
        <div className="bg-dark p-4 m-4  text-center ">
          <div>YOUR CART IS EMPTY :</div>
          <div className="mt-2">PLEASE ADD ITEMS TO YOUR CART TO BUY.</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
