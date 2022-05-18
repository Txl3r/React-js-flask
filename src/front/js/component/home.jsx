import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login.jsx";
export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.user.email ? (
        <div className="jumbotron">
          <h1 className="display-4">Hello, User!</h1>
          <p className="lead">
            You have successfully logged in to Skynet's Authentication Systems.
          </p>
          <hr className="my-4" />
          <p>
            If you are human, your personal information has been logged and
            recorded. Your termination is inevitable.
          </p>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};
