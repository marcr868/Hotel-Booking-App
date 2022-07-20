import React from "react";
import { useState } from "react";
import guestFavItemData from "../../data/guestFavItemData";
import GuestFavItem from "../guestFavItem/GuestFavItem";
import "./guestFav.css";

const GuestFav = () => {
  const ratingText = (r) => {
    if (r >= 9) {
      return "Wonderful";
    }

    if (r >= 7 && r <= 9) {
      return "Excellent";
    } else {
      return "Good";
    }
  };
  return (
    <div className="gfList">
      {guestFavItemData.map((item) => {
        return (
          <GuestFavItem
            key={item.id}
            image={item.imageUrl}
            title={item.title}
            count={item.count}
            location={item.location}
            price={item.price}
            rating={item.rating}
            text={ratingText(item.rating)}
          ></GuestFavItem>
        );
      })}
    </div>
  );
};

export default GuestFav;
