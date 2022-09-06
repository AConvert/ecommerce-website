import React from "react";

function MenuHeader() {
  return (
    <main>
      <section className="flex items-center justify-between px-20 py-3 border-b border-b-gray-200 border-opacity-40">
        <img src="../image/logo_1.png" loading="lazy" className="w-24 h-24" />
        <div className="text-white">
          Delivering to <span className="font-bold text-white">BL9 7NR</span>
        </div>
      </section>
    </main>
  );
}

export default MenuHeader;
