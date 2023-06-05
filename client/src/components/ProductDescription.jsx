import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
const ProductDescription = ({ product }) => {
  let date = new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000);
  return (
    <div style={{ color: "white" }}>
      <p>{product.title.longTitle}</p>
      <div className="d-flex ">
        <p style={{ fontSize: 28 }}>৳{product.price.cost}</p>
        &nbsp;&nbsp;&nbsp;
        <p
          style={{ color: "#878787", fontSize: 20 }}
          className="align-self-center"
        >
          <strike>৳{product.price.mrp}</strike>
        </p>
        &nbsp;&nbsp;&nbsp;
        <p
          style={{ color: "#388E3c", fontSize: 20 }}
          className="align-self-center"
        >
          {product.price.discount}
        </p>
      </div>
      <p>Available Offers</p>
      <div style={{ fontSize: "14px" }}>
        <p>
          <FontAwesomeIcon icon={faTag} size="xl" style={{ color: "green" }} />
          &nbsp; Get extra 20% off on 1 item(s) T&C
        </p>
        <p>
          <FontAwesomeIcon icon={faTag} size="xl" style={{ color: "green" }} />
          &nbsp; Get extra 13% off (price inclusive of discount) T&C
        </p>
        <p>
          <FontAwesomeIcon icon={faTag} size="xl" style={{ color: "green" }} />
          &nbsp; Buy 2 item(s) save 5%; Buy 3 or more save 10% T&C
        </p>
        <p>
          <FontAwesomeIcon icon={faTag} size="xl" style={{ color: "green" }} />
          &nbsp; Get extra 20% off on 1 item(s)
        </p>
      </div>
      <table className="table table-dark table-hover">
        <tbody>
          <tr>
            <td style={{ opacity: 0.8 }}>Delivery</td>
            <td style={{ fontWeight: "bold" }}>
              Delivery by {date.toDateString()} | 50 ৳
            </td>
          </tr>
          <tr>
            <td style={{ opacity: 0.8 }}>Description</td>
            <td style={{ fontWeight: "bold" }}>{product.description}</td>
          </tr>
          <tr>
            <td style={{ opacity: 0.8 }}>Warranty</td>
            <td style={{ fontWeight: "bold" }}>No Warranty</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDescription;
