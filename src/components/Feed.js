import React from "react";
import StarIcon from "@mui/icons-material/Star";
import * as CurrencyFormat from "react-currency-format";

function Feed({ title, imgUrl, price, rating }) {
  return (
    <main className=" bg-gradient-to-t from-gray-800 to-gray-600 rounded-2xl w-[300px]">
      <section className="relative px-16 py-6">
        <div className="rounded-full  absolute z-20 -top-12 -left-10">
          <img
            src={imgUrl}
            className="w-24 h-24 pr-[6px] border-4 border-white  object-cover rounded-full"
          />
        </div>
        <div className="flex-col space-y-2 items-center">
          <div className="text-white text-xl">{title}</div>
          <div className="flex items-center space-x-1">
            <StarIcon fontSize="small" className="text-yellow-300" />
            <div className="text-white text-md">{rating}</div>
          </div>
          <div className="text-red-500 text-md">
            <CurrencyFormat value={price} displayType={"text"} prefix="£" />
          </div>
          <button className=" underline pb-1 text-gray-200">Order Now</button>
        </div>
        <div>
          <img
            src="../image/cart.png"
            loading="lazy"
            className="w-16 h-16 absolute z-20 -bottom-5 -right-5"
          />
        </div>
      </section>
    </main>
  );
}

export default Feed;
