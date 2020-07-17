import React from "react";
import Home from "../components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./routes.css";
import StudentRegister from "./../components/StudentRegister/StudentRegister";
import CourseRegister from "./../components/CourseRegister/CourseRegister";
export default function Routes() {
  return (
    <Router>
      <React.Fragment>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Enroll</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <StudentRegister />
          </Route>
          <Route path="/registercourse">
            <CourseRegister />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
