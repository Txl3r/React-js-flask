import React, { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");

  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          onChange={(e) => setEmail(e.target.value)}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          onChange={(e) => setPassword(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          onChange={(e) => setPassword(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">First Name</label>
        <input
          type="password"
          class="form-control"
          onChange={(e) => setFirstname(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Name Here"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Last Name</label>
        <input
          type="password"
          class="form-control"
          onChange={(e) => setLastname(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Name Here"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Date of Birth</label>
        <input
          type="password"
          class="form-control"
          onChange={(e) => setDateofbirth(e.target.value)}
          id="exampleInputPassword1"
          placeholder="Enter date of birth"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
};