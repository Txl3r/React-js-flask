import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");

  const history = useHistory();
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">First Name</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setFirstname(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Name Here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Last Name</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setLastname(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Name Here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Date of Birth</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setDateofbirth(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Enter date of birth"
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          actions.signUp(email, password, firstname, lastname, dateofbirth);
          history.push("/login");
        }}
        type="submit"
        className="btn btn-primary"
      >
        Sign Up
      </button>
    </form>
  );
};
