import { useEffect, useState } from "react";

const CartPriceDetails = ({ cartItem }) => {
  let item = cartItem.length > 1 ? "Items" : "item";
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const totalAmount = () => {
    let p = 0;
    let d = 0;
    cartItem.map((item) => {
      p += item.price.mrp;
      d += item.price.mrp - item.price.cost;
    });
    setPrice(p);
    setDiscount(d);
  };
  useEffect(() => {
    totalAmount();
  }, [cartItem]);
  return (
    <div className=" bg-dark">
      <div
        style={{
          padding: "15px 24px",
          paddingBottom: "0px",
          borderBottom: "1px solid #343a40",
        }}
      >
        <p className="fw-bold ">PRICE DETAILS</p>
      </div>
      <div
        style={{
          padding: "15px 24px",
        }}
      >
        <div className="mt-1">
          Price ({cartItem?.length}
          {item} ) <div style={{ float: "right" }}>৳ {price}</div>
        </div>
        <div className="mt-2">
          Discount ({cartItem?.length}){" "}
          <div style={{ float: "right" }}>৳ {discount}</div>
        </div>
        <div className="mt-2">
          Delivery Charges ({cartItem?.length}){" "}
          <div style={{ float: "right" }}>৳ 40</div>
        </div>
        <div className="fw-bold fs-5 mt-2">
          Total Amount ({cartItem?.length}){" "}
          <div style={{ float: "right" }}>৳ {price - discount + 40}</div>
        </div>
        <div className="mt-5 text-success fw-bold">
          You will save total ৳ {discount - 40} on this order
        </div>
      </div>
    </div>
  );
};

export default CartPriceDetails;
