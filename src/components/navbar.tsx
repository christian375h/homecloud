import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  CloudIcon,
  QuestionMarkCircleIcon,
  ComputerDesktopIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import ThemeProvider from "./theme-provider";


const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

// account pages menu
const accountItems = [
  {
    title: "Login",
    href: "/login"
  },
  {
    title: "Sign Up",
    href: "/signup"
  }
];
// nav list menu
const navListMenuItems = [
  {
    title: "About Us",
    href: "/about"
  },
  {
    title: "Landing Page",
    href: "/landing"
  },
  {
    title: "404",
    href: "/404"
  }
];


function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/products"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <ComputerDesktopIcon className="h-[18px] w-[18px]" />
          Products
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/about"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <QuestionMarkCircleIcon className="h-[18px] w-[18px]" />
          About Us
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <ThemeProvider>
      <Navbar className="absolute mx-auto left-0 right-0 max-w-screen-xl px-4 py-2 z-10">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="h6"
            className="flex items-center gap-2 mr-4 cursor-pointer py-1.5dflg:ml-2"
          >
            <CloudIcon className="h-[25px] w-[25px]" />
            Home Cloud
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          {/* <div className="hidden gap-2 lg:flex"> */}
          {/*   <a href="./login"> */}
          {/*     <Button variant="text" size="sm" color="blue-gray"> */}
          {/*       Sign In */}
          {/*     </Button> */}
          {/*   </a> */}
          {/*   <a href="/signup"> */}
          {/*     <Button size="sm" color="dark"> */}
          {/*       Sign Up */}
          {/*     </Button> */}
          {/*   </a> */}
          {/* </div> */}
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          {/* <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden"> */}
          {/*   <a href="/login"> */}
          {/*     <Button variant="outlined" size="sm" color="dark" fullWidth> */}
          {/*       Sign In */}
          {/*     </Button> */}
          {/*   </a> */}
          {/*   <a href="/signup"> */}
          {/*     <Button size="sm" fullWidth color="dark"> */}
          {/*       Sign Up */}
          {/*     </Button> */}
          {/*   </a> */}
          {/* </div> */}
        </Collapse>
      </Navbar>
    </ThemeProvider>
  );
}
