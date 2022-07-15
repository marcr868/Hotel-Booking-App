import React from "react";

//import styles
import "./propertyListItem.css";

const PropertyListItem = ({ image, title, count }) => {
  return (
    <div>
      <div className="pListItem">
        <img src={image} alt={title} className="pListImg" />
        <div className="pListTitles">
          <h1>{title}</h1>
          <h3>{count} properties</h3>
        </div>
      </div>
    </div>
  );
};

export default PropertyListItem;
