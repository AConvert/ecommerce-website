import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../config";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";

function Login() {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [authError, setAuthError] = useState(false);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const checkUserData = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          updateDoc(doc(db, "users", user.uid), {
            timestamp: serverTimestamp(),
          });
          navigate("/");
        }
      };
    }
  }, [user, navigate]);

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        if (error) {
          console.log(error.message);
          setAuthError(!authError);
        }
      });
    setUserEmail("");
    setUserPassword("");
  };

  const signInGoogle = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(credential);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setAuthError(!authError);
        alert(credential);
        alert(errorMessage);
      });
  };

  return (
    <main className="text-white md:flex md:justify-center md:items-center bg-gray-900 md:bg-gray-700 w-screen h-screen md:h-full pb-24 px-6 xl:px-80">
      <section className="md:w-full lg:h-full lg:pb-44 xl:pb-10 bg-gray-900 space-y-8 xl:space-y-2 md:border-2 md:m-24 lg:m-44 xl:m-8 md:rounded-xl border-gray-400 border-opacity-80">
        <div className="grid place-items-center pt-6">
          <img
            src="/image/logo_1.png"
            className="w-36 h-36 md:w-44 md:h-44 xl:w-24 xl:h-24 "
            loading="lazy"
            alt="signup_logo"
          />
        </div>
        <div className="flex flex-col md:p-24 xl:py-2 xl:px-44 xl:h-screen-md mx-3 xl:mx-1 space-y-5 relative xl:py-4">
          <div className="grid place-items-center ">
            <button
              onClick={signInGoogle}
              className="border bg-green-600  w-full py-3 cursor-pointer focus:bg-green-700  rounded-xl"
            >
              <GoogleIcon
                sx={{ height: 32, width: 32 }}
                className="w-6 h-6  text-white "
              />
            </button>
          </div>
          <div className="w-full flex flex-col space-y-6 ">
            {authError ? (
              <div>
                <h1 className=" w-full rounded-lg text-red-500 bg-white p-3 text-sm text-center absolute z-2 top-0 left-0">
                  Your credentials are invalid...
                </h1>
              </div>
            ) : null}
            <input
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="email"
              className="border bg-white text-sm pl-4 xl:py-4 focus:border-red-600 focus:border-2 outline-none  text-black w-full py-5 cursor-pointer  rounded-xl"
              required
              placeholder="Email"
            />
            <input
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              type="password"
              className="border bg-white text-sm pl-4 xl:py-4 focus:border-red-600 focus:border-2 outline-none  text-black w-full py-5 cursor-pointer  rounded-xl"
              required
              placeholder="Password"
            />
            <div
              onClick={handleLogIn}
              className=" bg-red-500 text-lg text-center py-4 rounded-xl outline-none"
            >
              <button>Log in</button>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 pt-2">
            <h2 className="text-sm text-white text-opacity-80">
              Don't have an account?
            </h2>
            <Link
              to={"/signup"}
              className="text-md font-bold text-white hover:text-red-600 "
            >
              Sign up
            </Link>
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
