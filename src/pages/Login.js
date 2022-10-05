import React, { useEffect, useRef, useState } from "react";
import { auth, googleProvider, facebookProvider } from "../config";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUser } from "../features/userSlice";

function Login() {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setShowSignIn(false));

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
      .then((data) => {
        dispatch(
          loginUser({
            id: data.user.uid,
            email: data.user.email,
            userName: data.user.displayName,
          })
        );
        console.log(data.user);
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        {
          errorCode && alert(errorMessage);
        }
        return;
      });
  };

  const handleSignIn = () => {
    if (!signInEmail) {
      alert("Please insert your email");
    }

    auth
      .signInWithEmailAndPassword(signInEmail, signInPassword)
      .then((data) => {
        dispatch(
          loginUser({
            id: data.user.uid,
            email: data.user.email,
            userName: data.user.displayName,
          })
        );
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;

        {
          errorCode && alert(errorMessage);
        }
        return;
      });
  };

  function useOnClickOutside(modalRef, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!modalRef.current || modalRef.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [modalRef, handler]);
  }

  const signInGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        var user = result.user;
        dispatch(loginUser(user));
      })
      .catch((error) => {
        let errorMessage = error.message;
        {
          error && alert(errorMessage);
        }
        return;
      });
  };

  const signInFacebook = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((result) => {
        var user = result.user;
        dispatch(loginUser(user));
      })
      .catch((error) => {
        let errorMessage = error.message;
        {
          error && alert(errorMessage);
        }
        return;
      });
  };

  return (
    <>
      <div
        ref={modalRef}
        className={
          showSignIn
            ? "absolute z-20 top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 shadow-md shadow-gray-400"
            : "hidden"
        }
      >
        <div className="flex flex-col items-center  space-y-6">
          <h1 className="text-3xl text-center font-semibold">Sign In</h1>
          <div className="border-b-gray-900 border-b">
            <input
              className="pl-2 pr-10 py-3 rounded-md focus:outline-none "
              type="email"
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="border-b-gray-900 border-b">
            <input
              className="pl-2 pr-10 py-3 rounded-md focus:outline-none"
              type="password"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="pt-4">
            <Link
              to={!user && "/"}
              onClick={handleSignIn}
              className="bg-red-500 py-3 px-12 xl:px-28 flex-1 cursor-pointer hover:bg-red-700 rounded-xl text-center text-white  border border-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <main className="w-screen h-full md:h-screen lg:h-screen xl:h-full bg-gray-900 relative">
        <section className=" xl:px-20 xl:py-16">
          <div className="flex flex-col items-center pb-10 xl:flex-row xl:justify-around ">
            <img
              src="/image/logo_1.png"
              alt="login_logo"
              className="w-48 h-48 mt-6 md:hidden"
            />
            <img
              src="../image/login.jpg"
              className="hidden md:w-[600px] md:h-[460px] md:block md:pt-16 xl:w-1/2 object-cover xl:h-screen"
              loading="lazy"
            />
            <div className="flex flex-col items-center">
              <div className="flex-col space-y-6 w-full xl:py-24">
                <h1 className="text-white pb-1 pt-6 md:pt-12 md:text-4xl text-3xl xl:pb-2 xl:pt-12 xl:text-4xl font-semibold text-center">
                  Sign Up
                </h1>
                <div className="flex flex-col items-center flex-1 space-y-8">
                  <div>
                    <input
                      placeholder="Email"
                      value={signUpEmail}
                      className="pl-2 w-full py-3 rounded-md focus:outline-none"
                      type="Email"
                      onChange={(e) => setSignUpEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Password"
                      value={signUpPassword}
                      className="pl-2 w-full py-3  rounded-md  focus:outline-none"
                      type="Password"
                      onChange={(e) => setSignUpPassword(e.target.value)}
                    />
                  </div>

                  <div className="pt-4">
                    <Link
                      className="bg-red-500 py-3 pl-[74px] pr-[74px]  cursor-pointer hover:bg-red-700 rounded-xl text-center text-white  border border-white"
                      onClick={handleSignUp}
                      to={!user && "/"}
                    >
                      Sign Up
                    </Link>
                    <Outlet />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4 pt-12">
                  <Link
                    to={!user ? "/" : "/login"}
                    onClick={signInGoogle}
                    className="bg-gray-200 rounded-full p-2 "
                  >
                    <img src="../image/google.png" className="w-8 h-8" />
                  </Link>
                  <Link
                    to={!user ? "/" : "login"}
                    onClick={signInFacebook}
                    className="bg-gray-200 rounded-full p-2 "
                  >
                    <img src="../image/facebook.png" className="w-8 h-8" />
                  </Link>
                </div>
                <div className="flex items-center pt-5 justify-center space-x-3">
                  <p className="text-md text-white">Already a member?</p>
                  <button
                    onClick={() => setShowSignIn(!showSignIn)}
                    className="text-green-500 text-lg"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
