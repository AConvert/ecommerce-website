import React from "react";

function Category({ id, title }) {
  return (
    <main className=" rounded-2xl flex-shrink-0">
      <section className="w-28 md:w-20 xl:w-32 flex justify-center mr-2 mb-2  bg-gray-600 rounded-lg cursor-pointer shadow-sm shadow-gray-400 hover:scale-105 hover:transition-all hover:ease-in-out  text-white xl:hover:bg-white xl:hover:text-black">
        <p className="text-sm pt-1 pb-1 lg:pt-2 lg:pb-2 font-semibold xl:text-lg">
          {title}
        </p>
      </section>
    </main>
  );
}

export default Category;
