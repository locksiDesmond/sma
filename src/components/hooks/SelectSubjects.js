import React from "react";
import Select from "react-select";
const Classes = require("../../lib/Classes.js");
export default function SelectSubjects(props) {
  const handleChange = (e) => {
    console.log(e);

    props.onChange([...e]);
  };
  const isSenior = () => {
    switch (props.class) {
      case "ss1":
      case "ss2":
      case "ss3":
        return true;
      default:
        return false;
    }
  };
  const level = isSenior()
    ? props.department
      ? Classes.senior.department[props.department]
          .filter((item) => !item.isCompulsory)
          .map((item) => ({ label: item.title, value: item.title }))
      : []
    : Classes.junior[0].subjects
        .filter((item) => !item.isCompulsory)
        .map((item) => ({ label: item.title, value: item.title }));
  return (
    <React.Fragment>
      <label>choose atleast 1 optional subjects</label>
      <Select
        options={level}
        onChange={handleChange}
        isSearchable="true"
        isMulti
        className="form-control select"
      />
    </React.Fragment>
  );
}
