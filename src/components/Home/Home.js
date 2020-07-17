import React from "react";
import { useLocation, useHistory } from "react-router";
import "./home.css";
export default function Home() {
  //history state
  const history = useHistory();
  const location = useLocation();
  // register state
  let state = location.state;
  return (
    <div className="home">
      <p>Welcome home gee</p>
      <p>Hello world</p>
    </div>
  );
}
