import React from "react";
import { Link } from "react-router-dom";
import MenuHeader from "../components/MenuHeader";
import PopularCard from "../components/PopularCard";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import CurrencyFormat from "react-currency-format";

function FoodComponent({ title, data }) {
  const itemsBasket = useSelector(selectBasketItems);
  const totalBasketSum = useSelector(selectBasketTotal);
  return (
    <main className="h-full w-full pb-20">
      <MenuHeader />
      {itemsBasket.length > 0 ? (
        <div className="w-screen">
          <div className="fixed -translate-x-1/2 -translate-y-1/2 bottom-6 left-1/2 z-20">
            <Link to={"/basket"}>
              <button className="font-bold text-md md:text-2xl bg-red-500 py-4 md:py-6 text-white w-72 md:w-[500px] rounded-lg">
                View Basket
                <span className="text-md md:text-2xl ml-2 xl:ml-4 font-bold text-white">
                  <CurrencyFormat
                    value={totalBasketSum}
                    displayType={"text"}
                    prefix={"£"}
                    decimalScale={2}
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      ) : null}
      <div>
        <Link
          to={"/menu"}
          className="rounded-full bg-gray-700 text-white hover:bg-white hover:text-black  p-1 lg:p-2 absolute top-0 left-0 m-3"
        >
          <KeyboardBackspaceIcon className="h-4 w-4 lg:h-6 lg:w-6" />
        </Link>
      </div>
      <section className="">
        <div className="flex flex-col space-y-6 mt-6 w-screen">
          <h1 className="text-white font-bold text-2xl ml-6">{title}</h1>
          <div className=" grid grid-cols-2 gap-x-3 gap-y-3 px-2 pb-12 hover:shadow-xl transition-shadow duration-300 ease-in-out md:grid-cols-3 md:px-10 md:gap-x-4 md:gap-y-4 xl:grid xl:grid-cols-4 xl:grid-rows-2 xl:gap-x-4 xl:gap-y-4 ">
            {data.map((item) => (
              <PopularCard
                id={item._id}
                key={item._id}
                price={item.price}
                description={item.description}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default FoodComponent;
