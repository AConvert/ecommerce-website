import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addItemToBasket } from "../features/basketSlice";

function PopularCard({ id, title, description, image, price }) {
  const dispatch = useDispatch();
  const addToBasket = () => {
    dispatch(addItemToBasket({ id, image, title, description, price }));
  };

  return (
    <main className="text-white">
      <section id={id} className="relative">
        <div className="flex-col items-center rounded-2xl w-full h-full  ">
          <img
            src={image.asset.url}
            className=" w-full object-cover h-28 xl:h-40 rounded-tl-xl rounded-tr-xl"
            loading="lazy"
          />
          <div className="bg-gray-700 px-2 py-6 xl:px-3 xl:py-6 space-y-1 md:space-y-2 xl:space-y-3 rounded-bl-xl rounded-br-xl text-white pb-2">
            <h1 className=" font-semibold text-md xl:text-lg">{title}</h1>

            <h2 className=" text-xs md:text-sm h-10 nowrap overflow-hidden">
              {description}
            </h2>
            <div>
              <CurrencyFormat value={price} displayType={"text"} prefix={"£"} />
            </div>
            <button
              onClick={addToBasket}
              className=" text-xs md:text-md xl:text-lg bg-green-500 py-2 px-2 rounded-md"
            >
              Add to basket
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PopularCard;
