import React from "react";
import Select from "react-select";
// import { Classes } from "./../../lib/Classes";
// const Classes = require("../../lib/Classes.js");
export default function SelectClass(props) {
  const options = [
    { value: "jss1", label: "Jss1" },
    { value: "jss2", label: "Jss2" },
    { value: "jss3", label: "Jss3" },
    { value: "ss1", label: "Ss1" },
    { value: "ss2", label: "Ss2" },
    { value: "ss3", label: "Ss3" },
  ];
  const handleChange = (e) => {
    // object {value and label}
    props.onChange(e.value);
  };
  return (
    <React.Fragment>
      <Select
        className="form-control select"
        onChange={handleChange}
        options={options}
      />
    </React.Fragment>
  );
}
