import { Link } from "gatsby";
import React, { useState, CSSProperties } from "react";
import classNames from "classnames";

import { ichrp } from "../../../images";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import useHeaderScrollThreshold from "./useHeaderScrollThreshold";

const Header = ({ shouldHeaderStartTransparent }) => {
  const { isPastHeaderScrollThreshold } = useHeaderScrollThreshold();

  const shouldHeaderBeTransparent = shouldHeaderStartTransparent && !isPastHeaderScrollThreshold;

  return (
    <div
      className={classNames(
        "top-0 z-10 w-full",
        shouldHeaderStartTransparent ? "fixed" : "sticky "
      )}
    >
      <div
        className={`flex mx-auto relative bg-opacity-25 bg-gray-50 transition-all ease-in duration-200 ${
          shouldHeaderBeTransparent
            ? "border-gray-900 border-opacity-0 border-b-0"
            : "border-gray-200 border-opacity-100 border-b-2"
        }`}
        style={{ "--bg-opacity": shouldHeaderBeTransparent ? 0 : 1 } as CSSProperties}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex xl:grid grid-cols-3 justify-between md:justify-end items-center border-b-1 border-gray-100 py-4 ">
          <Link to="/" className="flex flex-1">
            <img className="max-h-10" src={ichrp} alt="Workflow" />
            <span
              className={`mx-auto md:ml-2 flex items-center font-extrabold text-2xl italic ${
                shouldHeaderBeTransparent ? "text-gray-100" : "text-gray-700 "
              }`}
            >
              Set Them Free
            </span>
          </Link>

          <MobileMenu />

          <DesktopMenu shouldHeaderBeTransparent={shouldHeaderBeTransparent} />

          <span className="hidden md:flex rounded-md shadow-sm xl:ml-auto">
            <a
              href="https://www.canadahelps.org/en/dn/m/50517/donation"
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
