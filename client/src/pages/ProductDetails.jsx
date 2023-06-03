import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductQuery } from "../features/Product/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/Product/ProductSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error } = useProductQuery(id);
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  console.log("selected product", product);
  useEffect(() => {
    if (data) {
      dispatch(getProduct(data));
    }
  }, [dispatch, data]);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
