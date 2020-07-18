import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import { getDateMonthAndYearInString } from "./../../lib/handleDates";
export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(
        "https://peaceful-mountain-33242.herokuapp.com/students"
      );
      if (response.data) {
        setStudents(response.data.data);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="header">
        <Link to={{ pathname: "/" }}>
          <span> Sma</span>
        </Link>
      </div>
      <div className="dashboard">
        <div className="dashboard-table">
          <div className="title">
            <p>Student</p>
            <p>class</p>
            <p className="web">joined</p>
            <p className="web">street</p>
            <p className="web">city</p>
            <p className="">Grade</p>
          </div>
          {!loading ? (
            students.map((item) => (
              <div className="items">
                <p className="name">
                  {item.studentName.lastname} {item.studentName.firstname}
                </p>
                <p>{item.level}</p>
                <p className="web">{getDateMonthAndYearInString(item.date)}</p>
                <p className="web">{item.address.address}</p>
                <p className="web">{item.address.city}</p>
                <p className="">tbd</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
