import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const DealProductSlide = () => {
  const { products } = useSelector((state) => state.products);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="mt-3">
      <div
        className="fw-bolder my-0 p-3 fs-4 "
        style={{ color: "black", backgroundColor: "white" }}
      >
        Deals of the Day: <hr />
      </div>

      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        slidesToSlide={1}
        containerClass="carousel-container"
        centerMode={true}
        itemClass="carousel-item-padding-40-px"
        className="product-carousel"
      >
        {products.map((product) => {
          return (
            <Link
              to={`product/${product._id}`}
              className="py-1 text-center"
              key={product._id}
              style={{ backgroundColor: "white", textDecoration: "none" }}
            >
              <div style={{ backgroundColor: "white", paddingBottom: "5px" }}>
                <img src={product.url} alt="ad" className="product-img " />
                <p
                  className="product-title"
                  style={{ color: "#212121", fontWeight: "bold" }}
                >
                  {product.title.shortTitle}
                </p>
                <p className="product-title" style={{ color: "green" }}>
                  {product.discount}
                </p>
                <p
                  className="product-title"
                  style={{ color: "#212121", opacity: ".6" }}
                >
                  {product.tagline}
                </p>
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};

export default DealProductSlide;
