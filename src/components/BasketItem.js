import React from "react";
import CurrencyFormat from "react-currency-format";

function BasketItem({ title, price, image, length, id, handleRemove }) {
  return (
    <main className="flex-1">
      <div>
        <section className="flex items-center p-1 mx-4 rounded-lg space-x-4 bg-gray-700 text-white relative lg:mx-32">
          <div>
            <img
              src={image.asset.url}
              loading="lazy"
              className="w-20 h-20 lg:w-24 lg:h-24 pl-1 rounded-md object-cover"
            />
          </div>
          <div>
            <div className="flex flex-col space-y-1 py-1">
              <h1 className="font-semibold text-md">{title}</h1>
              <div>
                <CurrencyFormat
                  className="text-xs"
                  value={price}
                  displayType={"text"}
                  prefix={"£"}
                />
              </div>
              <p className="text-md text-white">{length} x</p>
            </div>
          </div>
          <div onClick={handleRemove}>
            <img
              src="/image/trash-bin.png"
              alt="trash"
              className="w-8 h-8 md:w-12 md:h-12 absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default BasketItem;
