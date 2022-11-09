import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import BasketItem from "../components/BasketItem";
import {
  removeItem,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CurrencyFormat from "react-currency-format";
import { useState, useEffect } from "react";

function Basket() {
  const itemsBasket = useSelector(selectBasketItems);
  const totalBasketSum = useSelector(selectBasketTotal);
  const [groupedItemsInTheBasket, setGroupedItemsInTheBasket] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = itemsBasket.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInTheBasket(groupedItems);
  }, [itemsBasket]);

  return (
    <main className="h-screen overflow-x-scroll w-screen pb-32">
      <section className="text-white">
        {itemsBasket.length <= 0 ? (
          <div className="flex items-center justify-center pt-36">
            <div className="flex flex-col space-y-7 items-center">
              <h1 className="text-white text-xl md:text-3xl">
                Your Basket is Empty
              </h1>
              <Link to={"/menu"} className="flex items-center ml-3">
                <h5 className="text-red-500 hover:text-white hover:underline text-xl md:text-3xl">
                  Back to shopping
                </h5>
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="py-4 flex flex-col flex-1 space-y-3 h-full">
              <Link
                to={"/menu"}
                className="flex items-center ml-3 hover:underline"
              >
                <ChevronLeftIcon className="text-xs " />
                <h5 className="text-white text-xs md:text-md lg:text-lg xl:text-xl">
                  Back to shopping
                </h5>
              </Link>
              <h1 className="text-lg lg:text-2xl text-center">Basket</h1>
              {Object.entries(groupedItemsInTheBasket).map(([key, item]) => (
                <BasketItem
                  id={item[0].id}
                  key={key}
                  image={item[0].image}
                  title={item[0].title}
                  price={item[0].price}
                  length={item.length}
                  handleRemove={() => dispatch(removeItem({ id: key }))}
                />
              ))}
            </div>
            <div className="flex bg-gray-700 mt-4 p-4 items-start mx-4 lg:mx-32 rounded-xl opacity-80 flex-col space-y-2">
              <div className="flex">
                <h1 className="text-md md:text-lg lg:text-2xl">Total Items</h1>
                <div className="text-md md:text-2xl ml-2 xl:ml-4 font-bold text-white">
                  <CurrencyFormat
                    value={totalBasketSum}
                    displayType={"text"}
                    prefix={"£"}
                    decimalScale={2}
                  />
                </div>
              </div>
              <div className="flex">
                <h1 className="text-md md:text-lg lg:text-2xl">Delivery fee</h1>
                <div className="text-md md:text-2xl ml-2 xl:ml-4 font-bold text-white">
                  <CurrencyFormat
                    value={3.99}
                    displayType={"text"}
                    prefix={"£"}
                    decimalScale={2}
                  />
                </div>
              </div>
              <div className="flex">
                <h1 className="text-md md:text-lg lg:text-2xl">Total order</h1>
                <div className="text-md md:text-2xl ml-2 xl:ml-4 font-bold text-white">
                  <CurrencyFormat
                    value={totalBasketSum + 3.99}
                    displayType={"text"}
                    prefix={"£"}
                    decimalScale={2}
                  />
                </div>
              </div>
            </div>
            <div className="w-screen">
              <Link
                to={"/success"}
                className="fixed -translate-x-1/2 -translate-y-1/2 bottom-0 left-1/2 z-20"
              >
                <button className="font-bold text-md md:text-2xl bg-red-500 py-4 md:py-6 text-white w-72 md:w-[500px] rounded-lg">
                  Complete Order
                </button>
              </Link>
              <Outlet />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Basket;
