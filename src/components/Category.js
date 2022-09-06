import React from "react";

function Category({ id, title, image }) {
  return (
    <main className=" bg-gray-800 my-6 ml-2 rounded-2xl flex-shrink-0">
      <section className="inline-block relative cursor-pointer hover:scale-105 hover:transition-all hover:ease-in-out ">
        <img
          src={image.asset.url}
          className=" object-cover w-44 h-32 rounded-2xl bg-gray-400"
        />
        <p className="absolute z-20 left-0 -bottom-8 text-white font-semibold ml-5 text-lg">
          {title}
        </p>
      </section>
    </main>
  );
}

export default Category;
