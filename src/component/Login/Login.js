import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App.js";
import { useHistory, useLocation } from "react-router-dom";
import google from "../../logos/google.png";
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div
        style={{
          margin: "auto",
          border: "2px solid gray",
          width: "400px",
          height: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginTop: "50px", marginBottom: "50px" }}>Login With</h2>
        <button
          style={{ borderRadius: "30px", padding: "10px 30px" }}
          onClick={googleSignIn}
        >
          <img
            style={{ width: "30px", marginRight: "5px" }}
            src={google}
            alt=""
          />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
