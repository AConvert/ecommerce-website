import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { emptyBasket } from "../features/basketSlice";

function SuccessOrder() {
  const [numRoad, setNumRoad] = useState("");
  const [road, setRoad] = useState("");
  const [postCode, setPostCode] = useState("");
  const [address, setAddress] = useState(false);

  const dispatch = useDispatch();

  const emptyBasketFromItems = () => {
    dispatch(emptyBasket());
  };

  useEffect(() => {
    const userAddress = JSON.parse(sessionStorage.getItem("address"));
    console.log(userAddress);
    if (!userAddress) {
      return;
    } else {
      setAddress(userAddress);
      setNumRoad(userAddress.results[0]?.address_components[0]?.long_name);
      setRoad(userAddress.results[0]?.address_components[1]?.long_name);
      setPostCode(userAddress.results[0]?.address_components[6]?.long_name);
    }
  }, []);

  return (
    <main className="bg-gray-700 text-white w-screen h-screen overflow-y-scroll pb-20">
      <section className="flex justify-center pt-8 md:pt-32 lg:pt-8">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-lg lg:text-2xl xl:text-3xl">
            {address ? `Delivering to` : null}
          </h1>
          <h1 className="text-lg font-bold">
            {address ? (
              <div className="flex space-x-2 items-center">
                <h1>{numRoad}</h1>
                <h1>{road}</h1>
                <h1>{postCode}</h1>
              </div>
            ) : null}
          </h1>
          <img
            src="/image/order_complete.png"
            alt="order_complete"
            loading="lazy"
            className="w-80 h-64"
          />
          <h2 className="text-lg lg:text-xl xl:text-2xl text-center pb-12">
            {!address ? (
              <div>
                <h1 className=" text-lg text-center mx-8">
                  To complete your order, go back to the homepage and enter your
                  address.
                </h1>
              </div>
            ) : (
              <h1 className="mx-4">
                Your order has been succesfully completed!
              </h1>
            )}
          </h2>
          <Link to={address ? "/track_order" : "/success"}>
            <button className="font-bold text-md md:text-xl bg-red-500 py-4 md:py-6 text-white w-60 md:w-[500px] lg:w-[300px] rounded-lg">
              Track Order Status
            </button>
          </Link>
          <Link to={"/menu"} onClick={address ? emptyBasketFromItems : null}>
            <button className="font-bold text-md md:text-2xl bg-white py-4 md:py-6 text-black w-60 md:w-[500px] lg:w-[300px] rounded-lg">
              Go back Home
            </button>
          </Link>
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default SuccessOrder;
