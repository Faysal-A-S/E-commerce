import React, { useEffect } from "react";
import AddCarousel from "../components/AddCarousel";
import { useProductsQuery } from "../features/Product/ProductApi";
import { useDispatch } from "react-redux";
import { getProducts } from "../features/Product/ProductSlice";

const Home = () => {
  const { data, isLoading, isError } = useProductsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(getProducts({ ...data }));
    }
  }, [dispatch, data]);
  return (
    <div className="p-3" style={{ backgroundColor: "#000" }}>
      <AddCarousel />
    </div>
  );
};

export default Home;
