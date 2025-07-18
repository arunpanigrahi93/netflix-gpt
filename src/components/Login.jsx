import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
    setSuccessMessage("");
  };

  const handleClicked = () => {
    const nameValue = !isSignInForm && name.current ? name.current.value : "";

    const message = checkValidateData(
      nameValue,
      email.current?.value,
      password.current?.value,
      isSignInForm
    );

    setErrorMessage(message);
    setSuccessMessage("");

    if (message) return;

    if (!isSignInForm) {
      // Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const signup = userCredential.user;
          console.log("signup", signup);

          // Clear input fields
          name.current.value = "";
          email.current.value = "";
          password.current.value = "";

          setSuccessMessage("Successfully signed up!");
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const signin = userCredential.user;
          console.log("sign in", signin);

          // Clear input fields
          email.current.value = "";
          password.current.value = "";

          // setSuccessMessage("Successfully signed in!");
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute px-16 py-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg text-white opacity-80"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-sm"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 rounded-sm"
        />

        {errorMessage && (
          <p className="text-red-400 font-bold text-lg">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-400 font-bold text-lg">{successMessage}</p>
        )}

        <button
          className="p-2 my-4 w-full bg-red-500 rounded-md"
          onClick={handleClicked}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <>
              New to Netflix? <span className="font-bold">Sign Up Now</span>
            </>
          ) : (
            <>
              Already registered? <span className="font-bold">Sign In Now</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
