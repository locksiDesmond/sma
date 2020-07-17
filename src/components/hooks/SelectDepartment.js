import React from "react";
import Select from "react-select";
export default function SelectDepartment(props) {
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
  const options = [
    { value: "humanities", label: "Humanities" },
    {
      value: "sciences",
      label: "Sciences",
    },
    {
      value: "business",
      label: "Business",
    },
  ];
  return (
    <React.Fragment>
      {isSenior() && (
        <React.Fragment>
          <label htmlFor="department">Department</label>
          <Select
            className="form-control select"
            name="department"
            isDisabled={!isSenior()}
            onChange={(e) => props.onChange(e.value)}
            options={options}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
