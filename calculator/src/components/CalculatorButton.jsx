import React from "react";

const CalculatorButton = (props) => {
  return (
    <button className={props.className} onClick={props.onClickFunc}>
      {props.display}
    </button>
  );
};

export default CalculatorButton;
