import React from "react";

function Category({ id, title, image }) {
  return (
    <main className=" my-6 ml-6 rounded-2xl flex-shrink-0">
      <section className="inline-block relative rounded-2xl cursor-pointer shadow-sm shadow-gray-400 hover:scale-105 hover:transition-all hover:ease-in-out ">
        <img
          src={image.asset.url}
          className=" object-cover w-32 h-32 rounded-2xl bg-gray-400"
          loading="lazy"
        />
        <p className="absolute z-20 left-0 -bottom-8 text-white font-semibold ml-5 text-lg">
          {title}
        </p>
      </section>
    </main>
  );
}

export default Category;
