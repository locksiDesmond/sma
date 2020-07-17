import React from "react";
import "./sma.css";
export default function Sma(props) {
  return (
    <div className="App">
      <div className="register">
        <p>{props.title}</p>
        <div className="register-div">{props.children}</div>
      </div>
    </div>
  );
}
