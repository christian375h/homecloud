import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

export function HeaderProducts() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white px-8 py-40">
        <div className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-8 leading-tight lg:text-6xl"
          >
            Hardware Built for Total Local Storage Control
          </Typography>
          <Typography variant="lead" className="text-blue-gray-800">
            Choose between our 1TB or 2TB mirrored home server setups. Each device
            features redundant dual drive mirroring, local delivery,
            full setup, and data migration support.
          </Typography>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeaderProducts;
