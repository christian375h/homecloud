import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

export function HeaderCarePlan() {
  const handleScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById("care-pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white px-8 pt-40">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-6xl"
            >
              Home Cloud Maintenance
            </Typography>
            <Typography variant="lead" className="lg:pr-20 text-blue-gray-800">
              Your data stays 100% private in your home while we take care of software updates, drive health monitoring, and local support.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#care-pricing" onClick={handleScroll}>
                <Button color="dark" size="lg">
                  View Care Plan
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img
              src="/IMG_9783.jpg"
              alt="Home Cloud Server Maintenance"
              className="max-w-md rounded-3xl ml-auto object-cover shadow-xl"
            />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeaderCarePlan;
