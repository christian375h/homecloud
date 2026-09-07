import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

export function HeaderProducts() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white px-8 py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-6xl"
            >
              Hardware Built for Total Local Storage Control
            </Typography>
            <Typography variant="lead" className="lg:pr-20 text-blue-gray-800">
              Choose between our 1TB or 2TB mirrored home server setups. Each device
              features redundant dual drive mirroring, local delivery,
              full setup, and data migration support.
            </Typography>
          </div>
          <div className="hidden lg:flex">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1287&auto=format&fit=crop"
              alt="home server hardware"
              className="max-w-md rounded-3xl ml-auto object-cover shadow-xl"
            />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeaderProducts;
