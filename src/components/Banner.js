import React from "react";
import { Link, Outlet } from "react-router-dom";

function Banner() {
  return (
    <main className="h-full w-screen xl:pb-20">
      <section className="flex flex-col items-center md:flex-row md:justify-center  ">
        <div className="flex flex-col items-center md:items-start md:pl-16 space-y-4 xl:space-y-8 pt-10 pb-10 xl:pb-36 xl:pl-20">
          <div className="text-center md:text-left  xl:text-left">
            <h1 className="font-bold text-3xl xl:text-6xl text-white">
              Order a Tasty and
            </h1>
            <h1 className="font-bold text-3xl text-center md:text-left xl:text-6xl text-white">
              Fresh Food
            </h1>
            <h1 className="text-red-500 font-bold text-3xl md:text-left xl:text-6xl ">
              anytime!
            </h1>
          </div>

          <div className="flex flex-col items-center md:items-start xl:space-y-10 space-y-6 xl:pb-6">
            <h3 className="font-semibold text-center md:text-left md:max-w-xs  text-gray-400 text-md">
              Just confirm your order and enjoy our delicious food every day.
            </h3>
            <div className="flex justify-center md:justify-start ">
              <Link
                className="bg-red-500 px-4 py-2 text-md rounded-xl xl:px-6 xl:py-4 xl:rounded-2xl text-white"
                to={"/menu"}
              >
                Discover the Menu
              </Link>
            </div>
            <Outlet />
          </div>
        </div>

        <div className="flex justify-center md:inline-block">
          <img
            src="../image/takeway_food_ill.png"
            className=" w-72 h-64 lg:w-90 xl:w-[600px] 2xl:w-[700px] xl:h-[500px] "
          />
        </div>
      </section>
    </main>
  );
}

export default Banner;
