import React from "react";

//component import
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const List = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* adding in a 'type' prop to hide some content within the Header */}
      <Header type="list"></Header>
    </div>
  );
};
export default List;
