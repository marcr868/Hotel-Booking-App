import React from "react";
import "./searchlistitem.css";

const SearchList = ({
  imageUrl,
  title,
  distance,
  inclOpt,
  subtitle,
  roomDets,
  cancelOpt,
  cancelOptDets,
  text_rating,
  rating,
  reviews,
  price,
  tax,
  searchOpts,
}) => {
  return (
    <>
      <div className="searchItem">
        <img src={imageUrl} alt={title} className="siImg"></img>
        <div className="siDesc">
          <h1 className="siTitle">{title}</h1>
          <span className="siDistance">{distance}</span>
          <span className="siIncludesOp">{inclOpt}</span>
          <span className="siSubTitle">{subtitle}</span>
          <span className="siFeatures">{roomDets}</span>
          <span className="siCancelOp">{cancelOpt}</span>
          <span className="siCancelOpSubtitle">{cancelOptDets}</span>
        </div>

        <div className="siDetails">
          <div className="siRating">
            <div>{text_rating}</div>
            <div>{reviews} reviews</div>
            <button>{rating}</button>
          </div>
          {/* <span>{searchOpts} adult</span> */}

          <div className="siDetailsTexts">
            <span className="siPrice">TTD {price.toFixed(2).toString()}</span>
            <span className="siTaxOp">
              {tax === null
                ? `includes taxes and charges`
                : `+TTD ${tax.toFixed(2).toString()} taxes and charges`}
            </span>
            <button className="siCheckButton">See Availability</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchList;
