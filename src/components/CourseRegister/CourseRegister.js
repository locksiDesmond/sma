import React, { useState } from "react";
import Sma from "./../../layout/Sma";
import SelectClass from "../hooks/SelectClass";
import SelectDepartment from "./../hooks/SelectDepartment";
import SelectSubjects from "./../hooks/SelectSubjects";

export default function CourseRegister() {
  const [level, setLevel] = useState("");
  const [department, setDepartment] = useState("");
  const [subjects, setSubjects] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ level, department, subjects });
  };
  return (
    <Sma title="Course Registration">
      <form onSubmit={handleSubmit}>
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
        <div className="course-r-btn">
          <button className="btn bd-10 btn-light-blue">Submit</button>
        </div>
      </form>
    </Sma>
  );
}
