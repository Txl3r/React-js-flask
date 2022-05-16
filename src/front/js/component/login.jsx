import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loggedin, setLoggedin } = useState("");
  const { actions } = useContext(Context);

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
