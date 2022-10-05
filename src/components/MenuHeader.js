import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

function MenuHeader() {
  return (
    <main>
      <section className="flex items-center justify-between px-20 py-3 border-b border-b-gray-200 border-opacity-40 relative">
        <Link
          to={"/"}
          className="rounded-full bg-gray-500 text-white p-1 lg:p-2 absolute top-0 left-0 m-3"
        >
          <KeyboardBackspaceIcon className="h-4 w-4 lg:h-6 lg:w-6" />
        </Link>
        <img
          src="../image/logo_1.png"
          loading="lazy"
          className="w-24 h-24 lg:w-32 lg:h-32"
        />
        <div className="text-white text-md lg:text-xl">
          Delivering to{" "}
          <span className="font-bold text-white text-md lg:text-xl md:pr-6">
            BL9 7NR
          </span>
        </div>
      </section>
    </main>
  );
}

export default MenuHeader;
