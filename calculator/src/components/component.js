import React, { useState } from "react";

import CalculatorButton from "./CalculatorButton";

const Counters = (props) => {
  const [count, setCount] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="textboxContainer">
      <div className="textbox">
        <p>
          {count} {result}
        </p>
      </div>
      <div className="allButtons">
        <br></br>
        <div>
          {props.title.map((number, index) => (
            <CalculatorButton
              key={index}
              onClickFunc={() => {
                setResult("");
                setCount(count + number);
              }}
              display={number}
              className="numButtons"
            />
          ))}

          {
            <button
              className="buttons"
              onClick={() => {
                try {
                  setResult(eval(count));
                  setCount("");
                } catch {
                  setResult("Invalid Formula");
                  setCount("");
                }
              }}
            >
              =
            </button>
          }
          {
            <button
              className="buttons"
              onClick={() => {
                setCount("");
                setResult("");
              }}
            >
              Clear
            </button>
          }
        </div>
        <div>
          {props.detail.map((sign, index) => (
            <CalculatorButton
              key={index}
              onClickFunc={() => {
                count === ""
                  ? setResult("")
                  : props.detail.includes(count[count.length - 1])
                  ? setCount(count.slice(0, count.length - 1) + sign)
                  : setCount(count + sign);
              }}
              className={"opsbuttons"}
              display={sign}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counters;
