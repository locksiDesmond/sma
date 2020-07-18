import React from "react";
import { useLocation, useHistory } from "react-router";
import "./home.css";
import welcome from "../../images/svg/welcome.svg";
import { Link } from "react-router-dom";
export default function Home() {
  //history state
  const history = useHistory();
  const location = useLocation();
  // register state
  let state = location.state;
  return (
    <div className="home">
      <div className="board">
        <div>
          <h2>Welcome to SMA</h2>
          <p>Enroll your child(ren) into the best quality school</p>
          <Link to="/register">
            <button className="btn btn-outline-dark">Enroll</button>
          </Link>
        </div>
        <div>
          <img src={welcome} alt="school nomad" />
        </div>
      </div>
    </div>
  );
}
