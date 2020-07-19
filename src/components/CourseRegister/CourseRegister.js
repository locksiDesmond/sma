import React, { useState, useEffect } from "react";
import Sma from "./../../layout/Sma";
import SelectClass from "../SelectForms/SelectClass";
import SelectSubjects from "./../SelectForms/SelectSubjects";
import SelectDepartment from "./../SelectForms/SelectDepartment";
import { useLocation, useHistory } from "react-router";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Redirect } from "react-router-dom";
const Classes = require("../../lib/Classes.js");

export default function CourseRegister() {
  const [level, setLevel] = useState("");
  const [department, setDepartment] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  //loading css
  const override = css(`
    display: block;
    margin: 0 auto;
    border-color:#4BAEC6;
  `);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const previousData = location.state;

  useEffect(() => {
    if (!location.state) {
      history.replace(from);
    }
  }, [location.state, from, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (level && subjects) {
      const isSenior = () => {
        switch (level) {
          case "ss1":
          case "ss2":
          case "ss3":
            return true;
          default:
            return false;
        }
      };
      const newSubjects = isSenior()
        ? Classes.senior.department[department].filter(
            (item) => item.isCompulsory
          )
        : Classes.junior[0].subjects.filter((item) => item.isCompulsory);
      const combinedSubjects = [...newSubjects, ...subjects];
      // const body {level , subjects,}
      try {
        const body = {
          level,
          department: department || "a junior",
          subjects: combinedSubjects,
          ...previousData,
        };
        const response = await fetch(
          "https://peaceful-mountain-33242.herokuapp.com/create",
          {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        const { error } = data;
        if (error) {
          const message = error.details[0].message;
          setError(message);
          setLoading(false);
        } else {
          setDone(true);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
  };
  return (
    <Sma title="Course Registration">
      <form onSubmit={handleSubmit}>
        {done && (
          <Redirect
            to={{
              pathname: "/dashboard",
            }}
          />
        )}

        <div className="form-group">
          <label htmlFor="class">Class</label>
          <SelectClass class={level} onChange={(value) => setLevel(value)} />
        </div>
        <div className="form-group">
          <SelectDepartment
            class={level}
            onChange={(value) => {
              setDepartment(value);
              setSubjects([]);
            }}
          />
        </div>
        <div className="form-group">
          <SelectSubjects
            class={level}
            department={department}
            onChange={(value) => setSubjects(value)}
          />
        </div>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <div className="course-r-btn">
          {!loading ? (
            <button className="btn bd-10 btn-light-blue">Submit</button>
          ) : (
            <ClipLoader
              css={override}
              size={40}
              color={"blue"}
              loading={loading}
            />
          )}
        </div>
      </form>
    </Sma>
  );
}
