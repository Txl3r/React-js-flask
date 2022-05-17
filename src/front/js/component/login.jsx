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
      <button
        onClick={(e) => {
          e.preventDefault();
          if (email == "" || password == "") {
            alert("The input cannot be empty");
          } else actions.logIn(email, password);
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
