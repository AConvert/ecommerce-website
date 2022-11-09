import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectBasketItems } from "../features/basketSlice";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef } from "react";
import { selectAddress, storeAddress } from "../features/userSlice";

function MenuHeader() {
  const itemsBasket = useSelector(selectBasketItems);
  const [newPostCode, setNewPostCode] = useState("");
  const [newStreetNum, setNewStreetNum] = useState("");
  const [newStreet, setNewStreet] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [numRoad, setNumRoad] = useState("");
  const [road, setRoad] = useState("");
  const [changeAddress, setChangeAddress] = useState(false);

  const dispatch = useDispatch();
  const userAddress = useSelector(selectAddress);

  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setIsOpen(false));

  function useOnClickOutside(modalRef, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!modalRef.current || modalRef.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [modalRef, handler]);
  }

  const getAddress = (num, street, postCode) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${num}+${street},+${postCode}&key=AIzaSyBKJdDxnl-VwMAk3tvsKGTtPbWvoM8UbI0`
    )
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("address", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = () => {
    setIsOpen(false);
    getAddress(newStreetNum, newStreet, newPostCode);
    setChangeAddress(true);
    setNumRoad(newStreetNum);
    setRoad(newStreet);
  };

  useEffect(() => {
    const dataAddress = JSON.parse(sessionStorage.getItem("address"));
    if (dataAddress) {
      dispatch(storeAddress(dataAddress));
      setChangeAddress(true);
      setNumRoad(dataAddress.results[0]?.address_components[0]?.long_name);
      setRoad(dataAddress.results[0]?.address_components[1]?.long_name);
    } else {
      return;
    }
  }, []);

  return (
    <main className="w-screen">
      <section className="flex items-center justify-center md:justify-between px-14 xl:px-20 py-3 border-b border-b-gray-200 border-opacity-40">
        <img
          src="../image/logo_1.png"
          loading="lazy"
          className="hidden lg:block lg:w-32 lg:h-32"
        />
        <div className="flex items-center justify-center space-x-5 xl:space-x-8 relative">
          <div className="text-white text-sm lg:text-xl flex-col items-center flex space-y-1">
            Delivering to{" "}
            <div className="flex items-center space-x-1">
              <h2 className="text-white text-md lg:text-xl">
                {changeAddress ? `${numRoad} ${road} ` : "Select address"}
              </h2>
              <KeyboardArrowDownIcon
                onClick={() => setIsOpen(true)}
                className="text-white font-extrabold text-md cursor-pointer"
              />
              {/* <button onClick={handleAddressChange}>update</button> */}
            </div>
            {isOpen ? (
              <div
                ref={modalRef}
                className="absolute z-20  top-52 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 shadow-md shadow-gray-400"
              >
                <div className="flex flex-col items-center space-y-6">
                  <h1 className=" text-center text-md text-black font-semibold">
                    ENTER ADDRESS
                  </h1>
                  <form className="border-b-gray-900 border-b">
                    <input
                      className="pl-2 pr-10 py-3 text-black rounded-md focus:outline-none "
                      type="number"
                      onChange={(e) => setNewStreetNum(e.target.value)}
                      placeholder="Street number"
                      required={true}
                    />
                  </form>
                  <div className="border-b-gray-900 border-b">
                    <input
                      className="pl-2 pr-10 py-3 text-black rounded-md focus:outline-none"
                      type="text"
                      spellCheck={true}
                      onChange={(e) => {
                        setNewStreet(e.target.value);
                      }}
                      placeholder="Street address"
                      required={true}
                    />
                  </div>
                  <div className="border-b-gray-900 border-b">
                    <input
                      className="pl-2 pr-10 py-3 text-black rounded-md focus:outline-none"
                      type="text"
                      onChange={(e) =>
                        setNewPostCode(e.target.value.toUpperCase())
                      }
                      placeholder="Postal Code"
                      required={true}
                    />
                  </div>
                  <button
                    disabled={!newPostCode || !newStreetNum || !newStreet}
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-red-500 py-3 px-12 xl:px-28 flex-1 cursor-pointer hover:bg-red-700 rounded-xl text-center text-white  border border-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          <div className="relative">
            <Link to={"/basket"}>
              <div>
                <img
                  src="../image/cart.png"
                  loading="lazy"
                  className="w-8 h-8 xl:h-10 xl:w-10"
                />
              </div>
              <div className="absolute -top-3 -right-3 z-20">
                <p className="rounded-full py-1 px-2 bg-red-500 text-white text-xs">
                  {itemsBasket.length}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MenuHeader;
