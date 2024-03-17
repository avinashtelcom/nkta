import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
} from "@material-tailwind/react";

import {
  BuildingOfficeIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
  UserGroupIcon,
  PauseIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
        placeholder=""
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "About NKTA",
    icon: BuildingOfficeIcon,
    href: "#aboutnkta",
  },
  {
    name: "Commitee Members",
    icon: UserGroupIcon,
    href: "#commitee",
  },
  {
    name: "Rankings",
    icon: RectangleStackIcon,
    href: "#rankings",
  },
  {
    name: "Players",
    icon: UserCircleIcon,
    href: "#players",
  }
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [opensignin, setOpenSignIn] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleOpenSignIn = () => setOpenSignIn((curSignIn) => !curSignIn);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      placeholder=""
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color={isScrolling ? "blue-gray" : "white"}
          className="text-lg font-bold"
          placeholder=""
        >
          North Karnataka Tennis Association
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"
            }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <>
            <Dialog
             placeholder=''
              size="xs"
              open={opensignin}
              handler={handleOpenSignIn}
              className="bg-transparent shadow-none"
            >
              <Card  placeholder='' className="mx-auto w-full max-w-[24rem]">
                <CardBody  placeholder='' className="flex flex-col gap-4">
                  <Typography placeholder='' variant="h4" color="blue-gray">
                    Sign In
                  </Typography>
                  <Typography placeholder=''
                    className="mb-3 font-normal"
                    variant="paragraph"
                    color="gray"
                  >
                    Enter your email and password to Sign In.
                  </Typography>
                  <Typography placeholder='' className="-mb-2" variant="h6">
                    Your Email
                  </Typography>
                  <Input placeholder='' label="Email" size="lg" crossOrigin="" />
                  <Typography placeholder='' className="-mb-2" variant="h6">
                    Your Password
                  </Typography>
                  <Input  crossOrigin="" placeholder='' label="Password" size="lg" />
                  <div className="-ml-2.5 -mt-3">
                    <Checkbox  crossOrigin="" placeholder='' label="Remember Me" />
                  </div>
                </CardBody>
                <CardFooter  placeholder='' className="pt-0">
                  <Button  placeholder='' variant="gradient" onClick={handleOpen} fullWidth>
                    Sign In
                  </Button>
                  <Typography  placeholder='' variant="small" className="mt-4 flex justify-center">
                    Don&apos;t have an account?
                    <Typography  placeholder=''
                      as="a"
                      href="#signup"
                      variant="small"
                      color="blue-gray"
                      className="ml-1 font-bold"
                      onClick={handleOpen}
                    >
                      Sign up
                    </Typography>
                  </Typography>
                </CardFooter>
              </Card>
            </Dialog>
          </>
          <Button onClick={handleOpenSignIn} color="gray" placeholder="">Log in</Button>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder=""
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={'#' + href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
          <>
            <Dialog
             placeholder=''
              size="xs"
              open={opensignin}
              handler={handleOpenSignIn}
              className="bg-transparent shadow-none"
            >
              <Card  placeholder='' className="mx-auto w-full max-w-[24rem]">
                <CardBody  placeholder='' className="flex flex-col gap-4">
                  <Typography placeholder='' variant="h4" color="blue-gray">
                    Sign In
                  </Typography>
                  <Typography placeholder=''
                    className="mb-3 font-normal"
                    variant="paragraph"
                    color="gray"
                  >
                    Enter your email and password to Sign In.
                  </Typography>
                  <Typography placeholder='' className="-mb-2" variant="h6">
                    Your Email
                  </Typography>
                  <Input placeholder='' label="Email" size="lg" crossOrigin="" />
                  <Typography placeholder='' className="-mb-2" variant="h6">
                    Your Password
                  </Typography>
                  <Input  crossOrigin="" placeholder='' label="Password" size="lg" />
                  <div className="-ml-2.5 -mt-3">
                    <Checkbox  crossOrigin="" placeholder='' label="Remember Me" />
                  </div>
                </CardBody>
                <CardFooter  placeholder='' className="pt-0">
                  <Button  placeholder='' variant="gradient" onClick={handleOpen} fullWidth>
                    Sign In
                  </Button>
                  <Typography  placeholder='' variant="small" className="mt-4 flex justify-center">
                    Don&apos;t have an account?
                    <Typography  placeholder=''
                      as="a"
                      href="#signup"
                      variant="small"
                      color="blue-gray"
                      className="ml-1 font-bold"
                      onClick={handleOpen}
                    >
                      Sign up
                    </Typography>
                  </Typography>
                </CardFooter>
              </Card>
            </Dialog>
          </>
          <Button onClick={handleOpenSignIn} color="gray" placeholder="">Log in</Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
