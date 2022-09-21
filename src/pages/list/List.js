import React from "react";

//component import
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SidebarSearch from "../../components/sidebar-search/SidebarSearch";
import { useLocation } from "react-router-dom";

import "./list.css";
import { useState } from "react";

const List = () => {
  //React router DOM useLOaction Hook
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar></Navbar>
      {/* adding in a 'type' prop to hide some content within the Header */}
      <Header type="list"></Header>
      <SidebarSearch
        destination={destination}
        date={date}
        options={options}
      ></SidebarSearch>

      <Footer></Footer>
    </div>
  );
};
export default List;
