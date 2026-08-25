import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar"

export function HeroSectionTwo() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white">
        <div className="relative h-screen flex align-center flex-col justify-center text-center bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1735633315995-7cffb5df79ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800"></span>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 !leading-tight lg:text-7xl z-20"
          >
            Take Control of Your Information
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 w-full opacity-80 md:w-10/12 lg:w-7/12 mx-auto px-28 z-10"
          >
            Tired of huge companies harvesting all of your personal information like photos, documents and passwords only to go and sell that information to other large companies? Well we are too, and with Home Cloud we aim to get as much of your data out of the hands of these big corporations and back into your control.
          </Typography>
          <div className="w-auto mx-auto">
            <div className="flex items-center">
              <Button color="dark" size="lg" className="w-full z-10">
                Let's Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
