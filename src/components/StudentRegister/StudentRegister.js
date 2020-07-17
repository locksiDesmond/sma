import React, { useState } from "react";
import Sma from "./../../layout/Sma";
import { Redirect } from "react-router-dom";
export default function StudentRegister() {
  const [authenticated, setAuthenticated] = useState(false);
  const [parentName, setParentName] = useState({ firstname: "", lastname: "" });
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [studentName, setStudentName] = useState({
    firstname: "",
    lastname: "",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState({ address: "", city: "" });
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      email &&
      studentName.firstname &&
      studentName.lastname &&
      parentName.lastname &&
      parentName.firstname &&
      phoneNumber &&
      address.address &&
      address.city
    ) {
      try {
        const body = { email, studentName, parentName, address, phoneNumber };
        const response = await fetch(
          "https://peaceful-mountain-33242.herokuapp.com/",
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
          setAuthenticated(true);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    } else {
      setError("fill all inputs");
      setLoading(false);
    }
  };
  return (
    <Sma title="Student registration">
      {authenticated && (
        <Redirect
          to={{
            pathname: "/registercourse",
            state: { email, studentName, parentName, address, phoneNumber },
          }}
        />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Parent name</label>
          <div className="form-inline">
            <div className="form-with-label">
              <input
                value={parentName.firstname}
                onChange={(e) =>
                  setParentName({
                    ...parentName,
                    firstname: e.currentTarget.value,
                  })
                }
                type="name"
                className="form-control "
                name="master"
              />
              <span> first name</span>
            </div>
            <div className="form-with-label">
              <input
                type="name"
                className="form-control"
                value={parentName.lastname}
                onChange={(e) =>
                  setParentName({
                    ...parentName,
                    lastname: e.currentTarget.value,
                  })
                }
              />
              <span>last name</span>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Parent Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            className="form-control"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
          />
        </div>
        <div className="form-group">
          <label>Student name</label>
          <div className="form-inline">
            <div className="form-with-label">
              <input
                type="name"
                className="form-control "
                name="master"
                value={studentName.firstname}
                onChange={(e) =>
                  setStudentName({
                    ...studentName,
                    firstname: e.currentTarget.value,
                  })
                }
              />
              <span> first name</span>
            </div>
            <div className="form-with-label">
              <input
                type="name"
                className="form-control"
                value={studentName.lastname}
                onChange={(e) =>
                  setStudentName({
                    ...studentName,
                    lastname: e.currentTarget.value,
                  })
                }
              />
              <span>last name</span>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <div className="form-inline">
            <div className="form-with-label">
              <input
                type="name"
                className="form-control "
                name="master"
                value={address.address}
                onChange={(e) =>
                  setAddress({ ...address, address: e.currentTarget.value })
                }
              />
              <span>Address </span>
            </div>
            <div className="form-with-label">
              <input
                type="name"
                className="form-control"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.currentTarget.value })
                }
              />
              <span>City</span>
            </div>
          </div>
        </div>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <div className="button-div">
          {!loading ? (
            <button className="btn left btn-light-blue rounded"> Next</button>
          ) : (
            <span>Loading</span>
          )}
        </div>
      </form>
    </Sma>
  );
}
