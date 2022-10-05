import React from "react";
import StarIcon from "@mui/icons-material/Star";
import * as CurrencyFormat from "react-currency-format";

function Feed({ title, imgUrl, price, rating }) {
  return (
    <main className=" bg-gradient-to-t from-gray-800 to-gray-600 rounded-2xl ">
      <section className="relative px-8 py-3 xl:px-16 xl:py-6 w-[138px] xl:w-[300px]">
        <div className="rounded-full  absolute z-20 -top-8 -left-6 xl:-top-12 xl:-left-10">
          <img
            src={imgUrl}
            className="w-12 h-12 xl:w-24 xl:h-24 xl:pr-[6px] border-2 xl:border-4 border-white  object-cover rounded-full"
          />
        </div>
        <div className="flex-col space-y-2 items-center">
          <div className="text-white text-sm xl:text-xl">{title}</div>
          <div className="flex items-center space-x-1">
            <StarIcon fontSize="small" className="text-yellow-300" />
            <div className="text-white text-xs xl:text-md">{rating}</div>
          </div>
          <div className="text-red-500 text-xs xl:text-md">
            <CurrencyFormat value={price} displayType={"text"} prefix="£" />
          </div>
          <button className=" underline pb-1 text-sm text-gray-200">
            Order Now
          </button>
        </div>
        <div>
          <img
            src="../image/cart.png"
            loading="lazy"
            className="w-8 h-8 xl:w-16 xl:h-16 absolute z-20 -bottom-5 -right-5"
          />
        </div>
      </section>
    </main>
  );
}

export default Feed;
