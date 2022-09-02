import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../config";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/userSlice";

function Header() {
  const [signedIn, setSignedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(!signedIn);
      } else {
        setSignedIn(false);
      }
    });
  }, []);

  const handleLogOut = () => {
    auth.signOut(() => {
      dispatch(logoutUser());
      console.log("You have signed out");
    });
  };

  return (
    <main>
      <section className="px-20 py-2">
        <div className="flex items-center justify-between">
          <img src="../image/logo_1.png" loading="lazy" className="w-32 h-32" />
          <div className="flex space-x-5 items-center">
            <Link
              to={signedIn ? "/login" : "/"}
              className="bg-green-600 text-white rounded-lg p-4 text-lg"
            >
              Sign Up
            </Link>
            <Link
              to={"/login"}
              onClick={handleLogOut}
              className=" text-white rounded-lg p-4 text-lg"
            >
              Log Out
            </Link>
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Header;
