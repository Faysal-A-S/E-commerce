import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const AddCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      slidesToSlide={1}
    >
      <img
        src="https://static-prod.adweek.com/wp-content/uploads/2019/12/hulu-cheez-it-ad-CONTENT-2019.jpg"
        alt="ad"
        className="ads"
      />
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/57/759/desktop-wallpaper-burger-king-hamburger-cheeseburger-big-mac-whopper.jpg"
        alt="ad"
        className="ads"
      />
    </Carousel>
  );
};

export default AddCarousel;
