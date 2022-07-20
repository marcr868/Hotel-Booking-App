import React from "react";
import { useState } from "react";
import "./header.css";

//icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faFlag,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

//Date range import
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

//options picker import
import OptionsPicker from "../options-picker/OptionsPicker";

const Header = ({ type }) => {
  //date range picker
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //show/hide daterange picker
  const [openDate, setOpenDate] = useState(false);
  const openPicker = () => {
    if (openDate) {
      setOpenDate(false);
    } else {
      setOpenDate(true);
    }
  };

  //show/hide options picker
  const [openOptions, setOpenOptions] = useState(false);
  const openOptionsPicker = () => {
    if (openOptions) {
      setOpenOptions(false);
    } else {
      setOpenOptions(true);
    }
  };

  //options - lifting state up pattern used here
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const chgVal = (name, oper) => {
    if (name === "Adult" && oper === "incr") {
      setOptions((options) => ({ ...options, adult: options.adult + 1 }));
    }

    if (name === "Adult" && oper === "decr") {
      setOptions((options) => ({ ...options, adult: options.adult - 1 }));
    }

    if (name === "Children" && oper === "incr") {
      setOptions((options) => ({
        ...options,
        children: options.children + 1,
      }));
    }

    if (name === "Children" && oper === "decr") {
      setOptions((options) => ({
        ...options,
        children: options.children - 1,
      }));
    }

    if (name === "Rooms" && oper === "incr") {
      setOptions((options) => ({
        ...options,
        room: options.room + 1,
      }));
    }

    if (name === "Rooms" && oper === "decr") {
      setOptions((options) => ({
        ...options,
        room: options.room - 1,
      }));
    }
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faFlag} />
            <span>Attractions</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free MRBOOKING account!
            </p>
            <button className="headerBtn">Sign In / Register</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                ></input>
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={openPicker} className="headerSearchText">
                  {`${format(date[0].startDate, "dd-MMM-yyyy")} to ${format(
                    date[0].endDate,
                    "dd-MMM-yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span className="headerSearchText" onClick={openOptionsPicker}>
                  {options.adult} adult, {options.children} children,{" "}
                  {options.room} room
                </span>
                {openOptions && (
                  <div className="options">
                    <OptionsPicker
                      name="Adult"
                      optionCount={options.adult}
                      updateCount={chgVal}
                    ></OptionsPicker>

                    <OptionsPicker
                      name="Children"
                      optionCount={options.children}
                      updateCount={chgVal}
                    ></OptionsPicker>

                    <OptionsPicker
                      name="Rooms"
                      optionCount={options.room}
                      updateCount={chgVal}
                    ></OptionsPicker>
                  </div>
                )}
              </div>

              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
