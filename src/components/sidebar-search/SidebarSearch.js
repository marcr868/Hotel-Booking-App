import React from "react";
import { useState } from "react";

//Date range import
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

import { format } from "date-fns";
import "./sidebarSearch.css";

//component imports:
import SearchList from "../searchlistItem/SearchListItem";
import searchListData from "../../data/searchListData";

const SidebarSearch = ({ destination, date, options }) => {
  const [_date, setDate] = useState(date);

  //show/hide daterange picker
  const [openDate, setOpenDate] = useState(false);
  const openPicker = () => {
    if (openDate) {
      setOpenDate(false);
    } else {
      setOpenDate(true);
    }
  };
  return (
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="listTitle">Search</h1>

          <div className="listItem">
            <label>Destination</label>
            <input type="text" placeholder={destination}></input>
          </div>

          <div className="listItem">
            <label>Check-in Date</label>
            <span onClick={openPicker}>
              {`${format(date[0].startDate, "dd-MMM-yyyy")} to ${format(
                date[0].endDate,
                "dd-MMM-yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                ranges={_date}
                minDate={new Date()}
              />
            )}
          </div>

          <div className="listItem">
            <label>Options</label>
            <div className="listOptionItem">
              <span className="listOptionText">
                Min Price <small>per night</small>
              </span>
              <input type="number" className="listOptionInput" />
            </div>

            <div className="listOptionItem">
              <span className="listOptionText">
                Max. Price <small>per night</small>
              </span>
              <input type="number" className="listOptionInput" />
            </div>

            <div className="listOptionItem">
              <span className="listOptionText">Adult</span>
              <input
                type="number"
                className="listOptionInput"
                placeholder={options.adult}
                min={1}
              />
            </div>

            <div className="listOptionItem">
              <span className="listOptionText">Children</span>
              <input
                type="number"
                className="listOptionInput"
                placeholder={options.children}
                min={0}
              />
            </div>

            <div className="listOptionItem">
              <span className="listOptionText">Room</span>
              <input
                type="number"
                className="listOptionInput"
                placeholder={options.room}
                min={0}
              />
            </div>
          </div>
          <button>Search</button>
        </div>

        <div className="listResult">
          {searchListData.map((item) => {
            return (
              <SearchList
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                distance={item.distance}
                inclOpt={item.includedOption}
                subtitle={item.features.description}
                roomDets={item.features.room_details}
                cancelOpt={item.features.cancellation_opt}
                cancelOptDets={item.features.cancellation_opt_detail}
                text_rating={item.rating.text}
                rating={item.rating.ratingVal}
                reviews={item.rating.review_count}
                price={item.costs.pricing}
                tax={item.costs.taxes}
                searchOpts={options.adult}
              ></SearchList>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarSearch;
