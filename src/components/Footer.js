import React from "react";

function Footer() {
  return (
    <main className="bg-gray-700 pt-8 pb-8 w-screen">
      <section className="text-white flex items-center justify-center space-x-12 ">
        <div className="flex flex-col space-y-3">
          <h3 className="text-sm font-bold md:text-lg lg:text-xl underline">
            Legal
          </h3>
          <div className="text-xs md:text-md lg:text-lg flex flex-col space-y-2 ">
            <h5 className="hover:underline cursor-pointer">
              Terms and conditions
            </h5>
            <h5 className="hover:underline cursor-pointer">Privacy</h5>
            <h5 className="hover:underline cursor-pointer">Cookies</h5>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <h3 className="text-sm font-bold md:text-lg lg:text-xl">Help</h3>
          <div className="text-xs md:text-md lg:text-lg flex flex-col space-y-2">
            <h5 className="hover:underline cursor-pointer">Contact us</h5>
            <h5 className="hover:underline cursor-pointer">FAQ</h5>
            <h5 className="hover:underline cursor-pointer">Cuisine</h5>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Footer;
