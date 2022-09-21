import React from "react";
import "./hotel.css";

//component imports
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

//third-party styling libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

//data imports
import hotelsImgsData from "../../data/hotelsImagesData";

const Hotel = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header type="list"></Header>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNowBtn">Reserve Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdrContainer">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span>123 Ninth Str</span>
          </div>

          <span className="hotelDistance">
            Excellent Location - 500m from Shopping Center
          </span>

          <span className="hotelPriceHiglight">
            Book stay over $114 and this property and get free airport taxi
          </span>
          <div className="hotelImgs">
            {hotelsImgsData.map((image) => (
              <div key={image.id} className="hotelImgWrapper">
                <img src={image.imageUrl} alt="hotelimg" className="hotelImg" />
              </div>
            ))}
          </div>

          <div className="hotelDetailsContainer">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
                luctus mi. Mauris eu velit ante. Nullam a metus in eros cursus
                convallis in vitae erat. Fusce tellus lectus, faucibus in
                placerat et, suscipit nec mauris. Aliquam eros velit, hendrerit
                a malesuada varius, vehicula ut risus. Etiam sit amet suscipit
                erat. Curabitur et elementum enim. Sed fringilla efficitur
                tellus non malesuada. In tristique eleifend nibh quis
                vestibulum. Pellentesque suscipit nisi id mi aliquam eleifend.
                Integer lobortis felis at tellus aliquet, at cursus lectus
                fringilla
              </p>
            </div>
            <div className="hotelDetialsPrice">
              <h1>Perfect for 9-night stay!</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
                luctus mi.
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve now!</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Hotel;
