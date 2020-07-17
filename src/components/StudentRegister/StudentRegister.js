import React from "react";

export default function StudentRegister() {
  return (
    <Sma title="Student registration">
      <form className="form">
        <div className="form-group">
          <label>Parent name</label>
          <div className="form-inline">
            <div className="form-with-label">
              <input type="name" className="form-control " name="master" />
              <span> first name</span>
            </div>
            <div className="form-with-label">
              <input type="name" className="form-control" />
              <span>last name</span>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Parent Email</label>
          <input className="form-control" type="email" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input className="form-control" type="number" />
        </div>
        <div className="form-group">
          <label>Student name</label>
          <div className="form-inline">
            <div className="form-with-label">
              <input type="name" className="form-control " name="master" />
              <span> first name</span>
            </div>
            <div className="form-with-label">
              <input type="name" className="form-control" />
              <span>last name</span>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <div className="form-inline">
            <div className="form-with-label">
              <input type="name" className="form-control " name="master" />
              <span>Address </span>
            </div>
            <div className="form-with-label">
              <input type="name" className="form-control" />
              <span>City</span>
            </div>
          </div>
        </div>
        <div className="button-div">
          <button className="btn left btn-light-blue rounded"> Next</button>
        </div>
      </form>
    </Sma>
  );
}
