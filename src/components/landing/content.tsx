import ThemeProvider from "../theme-provider";

import {
  Button,
  Typography,
} from "@material-tailwind/react";

export function HeroSectionFour() {
  return (
    <ThemeProvider>
      <header className="container mx-auto rounded-2xl overflow-hidden">
        <div className="relative h-full flex align-center flex-col justify-center text-center bg-cover py-24" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1729575846511-f499d2e17d79?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800"></span>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 !leading-tight lg:text-7xl z-20"
          >
            How It Works
          </Typography>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionFour;
