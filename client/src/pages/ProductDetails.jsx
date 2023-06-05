import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductQuery } from "../features/Product/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/Product/ProductSlice";
import ProductImage from "../components/ProductImage";
import ProductDescription from "../components/ProductDescription";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useProductQuery(id);
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  let content = null;
  useEffect(() => {
    if (data) {
      dispatch(getProduct(data));
    }
  }, [dispatch, data, product]);
  if (data?._id !== product?._id) {
    content = <div>Loading ...</div>;
  } else if (product._id) {
    content = (
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-8 col-xs-12 product-leftContainer">
          <ProductImage product={product} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-8 col-xs-12 product-rightContainer">
          <ProductDescription product={product} />
        </div>
      </div>
    );
  } else {
    content = <div>Loading ...</div>;
  }
  return <div>{content}</div>;
};

export default ProductDetails;
