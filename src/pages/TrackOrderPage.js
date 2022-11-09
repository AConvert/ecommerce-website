import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link } from "react-router-dom";

function TrackOrderPage() {
  return (
    <div className="bg-white w-screen h-screen">
      <Link to={"/success"}>
        <KeyboardArrowLeftIcon
          sx={{ fontSize: "36px" }}
          className="m-4 font-bold text-black rounded-full p-1 border-2 border-black"
        />
      </Link>

      <section className="pt-12 md:pt-20 xl:pt-0 lg:pb-20">
        <div className="flex  flex-col items-center">
          <h1 className="font-bold text-2xl md:text-4xl">
            Your order is preparing...
          </h1>
          <img
            className="w-58 h-58 md:w-[350px] md:h=[350px]"
            loading="lazy"
            src="/image/food-prep-unscreen.gif"
          />
        </div>

        <div className="mx-8 space-y-20 xl:space-y-10 md:mx-20 lg:mx-80">
          <Box sx={{ width: "100%" }}>
            <LinearProgress color="success" />
          </Box>
          <div className="flex flex-col items-center bg-red-500 text-white xl:mx-32 space-y-2 p-4 rounded-xl ">
            <h1 className="text-xl font-semibold ">Estimated arrival:</h1>
            <h1 className="text-xl font-bold">40-50 min</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrackOrderPage;
