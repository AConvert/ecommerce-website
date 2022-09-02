import React from "react";

function MenuHeader() {
  return (
    <main>
      <section className="flex items-center justify-between px-20 py-3">
        <img src="../image/logo_1.png" loading="lazy" className="w-28 h-28" />
        <div className="text-white">
          Delivering to <span className="font-bold text-white">BL9 7NR</span>
        </div>
      </section>
    </main>
  );
}

export default MenuHeader;
