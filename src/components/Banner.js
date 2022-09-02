import React from "react";
import { Link, Outlet } from "react-router-dom";

function Banner() {
  return (
    <main className="h-screen max-w-screen-2xl">
      <section className="flex items-center justify-center pt-20">
        <div className="flex-col space-y-8 pb-36 pl-20">
          <div>
            <h1 className="font-bold text-6xl text-white">Order a Tasty and</h1>
            <h1 className="font-bold text-6xl text-white">Fresh Food</h1>
            <h1 className="text-red-500 font-bold text-6xl ">anytime!</h1>
          </div>
          <div className="flex-col space-y-10">
            <h3 className="font-semibold text-gray-400 text-md">
              Just confirm your order and enjoy our delicious food every day.
            </h3>
            <div>
              <Link
                className="bg-red-500 px-6 py-4 rounded-2xl text-white"
                to={"/menu"}
              >
                Discover the Menu
              </Link>
            </div>
            <Outlet />
          </div>
        </div>
        {/* 
        <div>
          <img src="../image/salad_1.png" className="w-[700px] h-[500px] " />
        </div> */}
      </section>
    </main>
  );
}

export default Banner;
