import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Category from "../components/Category";
import Footer from "../components/Footer";
import MenuHeader from "../components/MenuHeader";
import { addCategory, selectCategory } from "../features/categorySlice";
import client from "../sanity";
import DealsPage from "./DealsPage";
import PopularPage from "./PopularPage";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import CurrencyFormat from "react-currency-format";

function Menupage() {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const itemsBasket = useSelector(selectBasketItems);
  const totalBasketSum = useSelector(selectBasketTotal);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category' ]{
      ...,
      image{
      asset->{
      _id,
      url
    }
    }}`
      )
      .then((data) => {
        dispatch(addCategory(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className="h-full w-full relative">
      <MenuHeader />
      {/* {Modal sm-md-lg screen */}
      {itemsBasket.length > 0 ? (
        <div className="w-screen">
          <div className="fixed -translate-x-1/2 -translate-y-1/2 bottom-0 left-1/2 z-20">
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
          to={"/"}
          className="rounded-full bg-gray-700 text-white hover:bg-white hover:text-black p-1 lg:p-2 absolute top-0 left-0 m-3"
        >
          <KeyboardBackspaceIcon className="h-4 w-4 lg:h-6 lg:w-6" />
        </Link>
      </div>

      <div className="">
        <div className="flex flex-col">
          <div className="flex items-center justify-center md:justify-start flex-wrap ml-2 md:ml-6 lg:space-x-2 mt-6">
            {category.map((category) => {
              return (
                <div className="">
                  <Link
                    key={category._id}
                    id={category._id}
                    to={`/${category.name}`}
                  >
                    <Category
                      key={category._id}
                      id={category._id}
                      title={category.name}
                    />
                  </Link>
                  <Outlet />
                </div>
              );
            })}
          </div>
          <DealsPage />
          <PopularPage />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Menupage;
