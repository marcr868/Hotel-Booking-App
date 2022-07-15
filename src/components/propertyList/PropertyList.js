import React from "react";

//import componet
import PropertyListItem from "../propertyListItem/PropertyListItem";

//import styling
import "./propertyList.css";

//data import
import propertyListData from "../../data/propertyListData";

const PropertyList = () => {
  return (
    <div className="pList">
      {propertyListData.map((item) => {
        return (
          <PropertyListItem
            key={item.id}
            image={item.imageUrl}
            title={item.title}
            count={item.count}
          ></PropertyListItem>
        );
      })}
    </div>
  );
};

export default PropertyList;
