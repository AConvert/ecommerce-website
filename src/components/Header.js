import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../config";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    auth.signOut(() => {
      dispatch(logoutUser());
      console.log("You have signed out");
    });
  };

  return (
    <main>
      <section className="px-6 xl:px-20 py-2">
        <div className="flex items-center justify-between">
          <img
            src="../image/logo_1.png"
            loading="lazy"
            className="w-20 h-20 xl:w-32 xl:h-32"
          />
          <div className="flex space-x-2 xl:space-x-5 items-center">
            <Link
              to={"/login"}
              onClick={handleLogOut}
              className=" text-white bg-green-600 rounded-lg p-2 text-sm md:text-lg lg:text-2xl xl:p-4 xl:text-lg"
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
