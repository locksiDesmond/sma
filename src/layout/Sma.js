import React from "react";
import "./sma.css";
import "../App.css";
export default function Sma(props) {
  return (
    <div className="App">
      <div className="register">
        <p style={{ color: "#000" }}>{props.title}</p>
        <div className="register-div">{props.children}</div>
      </div>
    </div>
  );
}
