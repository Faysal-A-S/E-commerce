import React, { useEffect } from "react";
import AddCarousel from "../components/AddCarousel";
import { useProductsQuery } from "../features/Product/ProductApi";
import { useDispatch } from "react-redux";
import { getProducts } from "../features/Product/ProductSlice";
import DealProductSlide from "../components/DealProductSlide";
import ProductSlide from "../components/ProductSlide";

const Home = () => {
  const { data, isLoading } = useProductsQuery();

  const dispatch = useDispatch();
  let dealData = null;

  if (isLoading) {
    dealData = (
      <div className="text-align-center text-success">
        Loading products please wait.....
      </div>
    );
  }
  if (data?.fetchedProducts?.length > 0) {
    dealData = (
      <>
        <DealProductSlide />
        <ProductSlide lineText="Trending:" />
        <ProductSlide lineText="Top Selection:" />
      </>
    );
  }
  useEffect(() => {
    if (data?.fetchedProducts?.length > 0) {
      dispatch(getProducts(data.fetchedProducts));
    }
  });
  return (
    <div className="p-3" style={{ backgroundColor: "#000" }}>
      <AddCarousel />
      {dealData}
    </div>
  );
};

export default Home;
