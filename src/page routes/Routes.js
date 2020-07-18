import React from "react";
import Home from "../components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./routes.css";
import StudentRegister from "./../components/StudentRegister/StudentRegister";
import CourseRegister from "./../components/CourseRegister/CourseRegister";
import Dashboard from "./../components/Dashboard/Dashboard";
export default function Routes() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/register">
            <StudentRegister />
          </Route>
          <Route path="/registercourse">
            <CourseRegister />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
