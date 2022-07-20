import React from "react";
import "./home.css";

//component imports
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import GuestFav from "../../components/guest-fav/GuestFav";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="homeContainer">
        <Featured></Featured>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList></PropertyList>
        <h1 className="homeTitle">Homes guests love</h1>
        <GuestFav></GuestFav>
      </div>
    </div>
  );
};
export default Home;
