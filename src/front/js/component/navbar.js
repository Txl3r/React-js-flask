import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const history = useHistory();
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Skynet</span>
        </Link>
        <div className="ml-auto">
          {store.user ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                actions.logout();
                history.push("/login");
              }}
              className="btn btn-primary"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button onClick className="btn btn-primary">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
