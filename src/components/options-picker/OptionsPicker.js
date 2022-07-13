import React from "react";
import "./optionspicker.css";

const OptionsPicker = (props) => {
  const disableBtn = (cmptName, count) => {
    if (cmptName == "Adult" && count <= 1) {
      return true;
    }

    if (cmptName == "Children" && count <= 0) {
      return true;
    }

    if (cmptName == "Rooms" && count <= 1) {
      return true;
    }
  };

  return (
    <div className="optionItem">
      <span className="optionText">{props.name}</span>
      <div className="option">
        <button
          className="optionCounterButton"
          onClick={() => props.updateCount(props.name, "incr")}
        >
          &#9652;
        </button>
        <span className="optionCounter">{props.optionCount}</span>

        <button
          disabled={disableBtn(props.name, props.optionCount)}
          className="optionCounterButton"
          onClick={() => props.updateCount(props.name, "decr")}
        >
          &#9662;
        </button>
      </div>
    </div>
  );
};

export default OptionsPicker;
