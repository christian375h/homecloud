import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroSectionTwo() {

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
              Our goal is to help you break free from corporations controlling your data
            </Typography>
            <Typography variant="lead" className="lg:pr-20 text-blue-gray-800">
              Privacy seems to be a luxury these days, and we want to change that.
              By storing all of your own data including photos, videos, documents and
              more inside your own home, you are taking control of your information
              by physically owning the hardware your data is stored inside.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
            </div>
          </div>
          <div className="hidden lg:flex">
            <img src="https://images.unsplash.com/photo-1620471499743-fedf03f86ef7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="iphone" className="max-w-md rounded-3xl ml-auto" />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
