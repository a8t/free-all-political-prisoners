import React, { useState, useRef } from "react";
import Transition from "../../utility/Transition";
import { useClickAway } from "react-use";
import { FaBook } from "react-icons/fa";
import { useHotkeys } from "react-hotkeys-hook";
import useHeaderScrollThreshold from "./useHeaderScrollThreshold";

export default function DesktopMenuItem({
  name,
  items,
  customRender = null,
}: {
  name: string;
  items: { title: string; body: string; icon?: React.ReactElement }[];
  customRender?: React.ReactElement;
}) {
  const { isPastHeaderScrollThreshold } = useHeaderScrollThreshold();

  const [shouldShow, setShouldShow] = useState(false);
  const open = () => setShouldShow(true);
  const close = () => setShouldShow(false);
  const toggle = () => setShouldShow(!shouldShow);

  const menuRef = useRef(null);

  // close when touching away or hitting escape
  useClickAway(menuRef, close, ["touchend", "click"]);
  useHotkeys("escape", close);

  return (
    <div>
      <button
        type="button"
        // open after 100ms in case another one is open...
        onClick={open}
        className={`group inline-flex items-center mx-3 border-b-2 px-4 py-2 text-base leading-6 font-medium focus:outline-none
            ${
              isPastHeaderScrollThreshold
                ? "text-gray-900 hover:text-gray-700 hover:border-gray-600 focus:text-gray-600 focus:border-gray-600 "
                : "text-gray-400 hover:text-gray-200 hover:border-gray-300 focus:text-gray-200 focus:border-gray-300 "
            }
            transition ease-in-out duration-150  border-transparent 
            ${shouldShow ? "border-gray-400" : ""}`}
      >
        <span
          className={`uppercase tracking-widest text-sm ${
            shouldShow ? (isPastHeaderScrollThreshold ? "text-gray-500" : "text-gray-200") : ""
          }`}
        >
          {name}
        </span>
      </button>

      <Transition
        show={shouldShow}
        {...{
          enter: "transition ease-out duration-200",
          enterFrom: "opacity-0 translate-y-1",
          enterTo: "opacity-100 translate-y-0",
          leave: "transition ease-in duration-150",
          leaveFrom: "opacity-100 translate-y-0",
          leaveTo: "opacity-0 translate-y-1",
        }}
      >
        <div
          className="hidden md:block absolute inset-x-0 transform shadow-lg left-0"
          style={{ top: 75 }}
          ref={menuRef}
        >
          {customRender || (
            <div className="bg-white">
              <ul className="max-w-7xl mx-auto grid row-gap-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                {items.map(({ title, body, icon }) => (
                  <li>
                    <a
                      href="#"
                      className="-m-3 p-3 flex flex-col justify-between space-y-6 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className="space-x-4 flex md:h-full lg:flex-col lg:space-x-0 lg:space-y-4">
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-red-500 text-white sm:h-12 sm:w-12">
                            {icon}
                          </span>
                        </div>
                        <div className="space-y-2 md:flex-1 md:flex md:flex-col md:justify-between lg:space-y-4">
                          <div className="space-y-1">
                            <p className="text-base leading-6 font-medium text-gray-900">{title}</p>
                            <p className="text-sm leading-5 text-gray-500">{body}</p>
                          </div>
                          <p className="text-sm leading-5 font-medium text-red-600">Learn more →</p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* extra */}
          <div className="bg-gray-50 h-16">
            <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-3 p-3 space-x-3 flex items-center rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                >
                  <span className="text-gray-400">
                    <FaBook />
                  </span>
                  <span>See all resources</span>
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-3 p-3 space-x-3 flex items-center rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                >
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>View all products</span>
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-3 p-3 space-x-3 flex items-center rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                >
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Contact Sales</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
