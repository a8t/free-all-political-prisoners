import React, { useState } from "react";
import Transition from "../../utility/Transition";
import { ichrp } from "../../../images";
import { Link } from "gatsby";
import { FaHammer, FaBook, FaChurch, FaWarehouse } from "react-icons/fa";

const MobileMenuLink: React.FC<{ to: string; icon: React.ReactNode }> = ({
  to,
  icon,
  children,
}) => {
  return (
    <Link
      to={to}
      className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
    >
      <span className="text-red-600">{icon}</span>
      <div className="text-base leading-6 font-medium text-gray-900">{children}</div>
    </Link>
  );
};

const MobileMenu = () => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <div className="-mr-2 -my-2 md:hidden">
        <button
          onClick={() => setShouldShow(!shouldShow)}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <Transition
        show={shouldShow}
        {...{
          enter: "duration-200 ease-out",
          enterFrom: "opacity-0 scale-95",
          to: "opacity-100 scale-100",
          leave: "duration-100 ease-in",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
        }}
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={ichrp} alt="Workflow" />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={() => setShouldShow(!shouldShow)}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <nav className="grid gap-x-8">
                    <MobileMenuLink to="/act" icon={<FaHammer />}>
                      Act
                    </MobileMenuLink>
                    <MobileMenuLink to="/act" icon={<FaBook />}>
                      Learn
                    </MobileMenuLink>
                    <MobileMenuLink to="/act" icon={<FaWarehouse />}>
                      Join
                    </MobileMenuLink>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                {/* <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Docs
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Enterprise
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Help Center
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Security
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Events
                  </a>
                </div> */}
                <a
                  href="https://www.canadahelps.org/en/dn/m/50517/donation"
                  className="shadow-sm w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default MobileMenu;
