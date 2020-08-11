import { Link } from "gatsby";
import React, { useState } from "react";
import ichrp from "../../../images/ichrp.png";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import useHeaderScrollThreshold from "./useHeaderScrollThreshold";

const Header = () => {
  const [shouldShow, setShouldShow] = useState(false);

  const { isPastHeaderScrollThreshold } = useHeaderScrollThreshold();

  return (
    <div className="fixed top-0 z-10 w-full">
      <div
        className={`flex mx-auto relative bg-opacity-25 bg-gray-50 transition-all ease-in duration-200 ${
          isPastHeaderScrollThreshold
            ? "border-gray-200 border-opacity-100 border-b-2"
            : "border-gray-900 border-opacity-0 border-b-0"
        }`}
        style={{ "--bg-opacity": isPastHeaderScrollThreshold ? 1 : 0 }}
      >
        <div className="container px-3 sm:px-6 m-auto flex w-full xl:grid grid-cols-3 justify-between md:justify-end items-center border-b-1 border-gray-100 py-4 ">
          <Link to="/" className="flex">
            <img className="max-h-10" src={ichrp} alt="Workflow" />
            <span
              className={`hidden md:flex ml-2 font-extrabold text-2xl italic ${
                isPastHeaderScrollThreshold ? "text-gray-700 " : "text-gray-100"
              }`}
            >
              Set Them Free
            </span>
          </Link>

          <MobileMenu />

          <DesktopMenu />

          <span className="hidden md:flex rounded-md shadow-sm xl:ml-auto">
            <a
              href="#"
              className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
            >
              Donate
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
