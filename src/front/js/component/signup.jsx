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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Confirm Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">First Name</label>
        <input
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Name Here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Last Name</label>
        <input
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Name Here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Date of Birth</label>
        <input
          onChange={(e) => setDateofbirth(e.target.value)}
          value={dateofbirth}
          type="password"
          className="form-control"
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
