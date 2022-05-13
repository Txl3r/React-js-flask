import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
  const { loggedin, setLoggedin } = useState("");
  const { actions } = useContext(Context);
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
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
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          actions.logIn(email, password);
          history.push("/home");
        }}
        type="submit"
        className="btn btn-primary"
      >
        Login
      </button>
    </form>
  );
};
