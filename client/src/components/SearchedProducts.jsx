import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useProductsQuery } from "../features/Product/ProductApi";
import { getProducts } from "../features/Product/ProductSlice";

const SearchedProducts = () => {
  const { title } = useParams();
  const { data } = useProductsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.fetchedProducts?.length > 0) {
      dispatch(getProducts(data.fetchedProducts));
    }
  }, [dispatch, data]);
  const { products } = useSelector((state) => state.products);

  let cardItems = products
    .filter(
      (product) =>
        product.title.longTitle.toLowerCase().includes(title) ||
        product.title.shortTitle.toLowerCase().includes(title)
    )
    .map((item) => (
      <div
        className="card bg-dark text-white p-3 m-2 col-lg-3 col-md-6 col-sm-12"
        style={{ width: "18rem" }}
        key={item._id}
      >
        <Link to={`/product/${item._id}`} style={{ textDecoration: "none" }}>
          <img src={item.url} className="card-img-top product-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-white fw-bold  ">
              {item.title.shortTitle}
            </h5>
            <p className="card-text text-success">{item.discount}</p>
            <p className="card-text text-white">{item.tagline}</p>
          </div>
        </Link>
      </div>
    ));

  return (
    <div className="m-5">
      <p className="fw-bolder fs-2 p-3  text-white text-center">
        Search Results For: {title}
      </p>
      <div className="d-flex row">{cardItems}</div>
    </div>
  );
};

export default SearchedProducts;
