import React from "react";

//component import
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

import "./list.css";

const List = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* adding in a 'type' prop to hide some content within the Header */}
      <Header type="list"></Header>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch"></div>

          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};
export default List;
