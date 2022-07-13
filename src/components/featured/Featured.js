import React from "react";
import "./featured.css";

const Featured = () => {
  const img1 =
    "https://cf.bstatic.com/xdata/images/region/square250/66248.webp?k=f34defdb67a5e01b61a92dd980b3fb4cc284fac5141520c0d424dc4a50e3d30b&o=";

  const img2 =
    "https://cf.bstatic.com/xdata/images/city/square250/833167.webp?k=0df1167c3a36cfa64e8139b7bf4dd76e90def8d6324a51f26492f4e7c0708ad6&o=";
  const img3 =
    "https://cf.bstatic.com/xdata/images/city/square250/833167.webp?k=0df1167c3a36cfa64e8139b7bf4dd76e90def8d6324a51f26492f4e7c0708ad6&o=";
  const img4 =
    "https://cf.bstatic.com/xdata/images/city/square250/765830.webp?k=aaa3cc262c57da6ce6d170a11bab770a5c60d3ca4ebf6d2975f41683993861c2&o=";

  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={img1} alt="image1" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Tobago</h1>
          <h3>100 properties</h3>
        </div>
      </div>

      <div className="featuredItem">
        <img src={img2} alt="image2" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Tobago</h1>
          <h3>100 properties</h3>
        </div>
      </div>

      <div className="featuredItem">
        <img src={img3} alt="image3" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Tobago</h1>
          <h3>100 properties</h3>
        </div>
      </div>

      <div className="featuredItem">
        <img src={img4} alt="image4" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Tobago</h1>
          <h3>100 properties</h3>
        </div>
      </div>
    </div>
  );
};

export default Featured;
