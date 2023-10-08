import { useRouteError } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, Image } from "@nextui-org/react";

import logoImg from "../../assets/TrendMicroLogo.png";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="relative flex flex-col">
      <Navbar className="flex max-md:px-3 navbar">
        <NavbarBrand className="flex-none max-w-[150px]">
          <div className="max-sm:w-[35px] max-sm:relative overflow-hidden logo-div">
            <Image width={150} alt="Trend Micro" src={logoImg} />
          </div>
        </NavbarBrand>
        <NavbarContent
          className="grow justify-end md:justify-center"
          justify="none"
        >
          <h1 className="text-2xl max-md:text-base font-bold text-inherit">
            What's Your DevOps Story?
          </h1>
        </NavbarContent>
      </Navbar>
      <div className="h-screen justify-center items-center flex gap-3 text-2xl">
        <h1>404</h1>
        <h2 className="border-l-1 pl-3">This page could not be found.</h2>
      </div>
    </div>
  );
}
