import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Button,
} from "@material-tailwind/react";
import {
  CloudIcon,
  QuestionMarkCircleIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import ThemeProvider from "./theme-provider";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 lg:gap-1">
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
        href="/care-plan"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <ShieldCheckIcon className="h-[18px] w-[18px]" />
          Care Plan
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

      <Typography
        as="a"
        href="/contact"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <EnvelopeIcon className="h-[18px] w-[18px]" />
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider>
      <Navbar fullWidth className="fixed top-0 left-0 right-0 z-50 rounded-none px-4 py-2">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="h6"
            className="flex items-center gap-2 mr-4 cursor-pointer py-1.5 font-bold"
          >
            <CloudIcon className="h-6 w-6 text-blue-600" />
            Home Cloud LLC
          </Typography>

          <div className="hidden lg:block">
            <NavList />
          </div>

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
          <div className="container mx-auto pb-2 pt-1">
            <NavList />
            <Button
              as="a"
              href="/contact"
              size="sm"
              fullWidth
              color="blue-gray"
              className="mt-2"
            >
              Get Started
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </ThemeProvider>
  );
}
