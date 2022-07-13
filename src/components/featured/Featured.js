import React from "react";
import "./featured.css";

//component import
import FeaturedItem from "../featuredItem/FeaturedItem";

//data import
import featuredData from "../../data/featuredData";

const Featured = () => {
  return (
    <div className="featured">
      {featuredData.map((item) => {
        return (
          <>
            <FeaturedItem
              key={item.id}
              image={item.url}
              title={item.title}
              count={item.count}
            ></FeaturedItem>
          </>
        );
      })}
    </div>
  );
};

export default Featured;
