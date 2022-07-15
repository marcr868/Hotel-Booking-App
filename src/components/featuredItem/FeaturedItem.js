import React from "react";

//import styling
import "./featuredItem.css";

const FeaturedItem = ({ image, title, count }) => {
  return (
    <>
      <div className="featuredItem">
        <img src={image} alt={title} className="featuredImg" />
        <div className="featuredTitles">
          <h1>{title}</h1>
          <h3>{count} properties</h3>
        </div>
      </div>
    </>
  );
};

export default FeaturedItem;
