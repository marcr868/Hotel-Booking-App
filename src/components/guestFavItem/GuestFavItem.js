import React from "react";
import "./guestFavItem.css";

const GuestFavItem = ({
  image,
  title,
  location,
  price,
  rating,
  count,
  text,
}) => {
  return (
    <div>
      <div className="gfListItem">
        <img src={image} alt={title} className="gfListImg" />
        <div className="gfListTitles">
          <h1>{title}</h1>
          <h3>{location} </h3>
          <h3>Starting from ${price} </h3>
          <span className="gfRating">{rating.toFixed(1)}</span>{" "}
          <span className="gfRatingText">{text}</span>
          &#8226; <span>{count} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default GuestFavItem;
