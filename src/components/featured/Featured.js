import React from "react";
//import component
import FeaturedItem from "../featuredItem/FeaturedItem";
//import styling
import "./featured.css";

//data import
import featuredItemData from "../../data/featuredItemData";

const Featured = () => {
  return (
    <div className="featured">
      {featuredItemData.map((item) => {
        return (
          <FeaturedItem
            key={item.id}
            image={item.imageUrl}
            title={item.title}
            count={item.count}
          ></FeaturedItem>
        );
      })}
    </div>
  );
};

export default Featured;
