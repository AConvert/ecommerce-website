import React from "react";
import CurrencyFormat from "react-currency-format";

function DealsCard({ id, title, description, price, image }) {
  return (
    <main className="text-white">
      <section id={id} className="w-full">
        <div className="flex-col items-center rounded-2xl w-64 h-fit xl:w-full object-cover">
          <img
            src={image.asset.url}
            className=" w-full object-cover h-36 rounded-tl-2xl rounded-tr-2xl"
            loading="lazy"
          />
          <div className="bg-gray-700 p-4 space-y-3 rounded-bl-2xl rounded-br-2xl text-white w-full">
            <h1 className=" font-semibold text-md xl:text-lg">{title}</h1>
            <h2 className=" text-xs ">{description}</h2>
            <div>
              <CurrencyFormat value={price} displayType={"text"} prefix={"£"} />
            </div>
            <button className=" text-sm xl:text-lg bg-green-500 py-2 px-2 rounded-md">
              Add to basket
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DealsCard;
