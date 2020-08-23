import React from "react";

import { useLocalStorage } from "react-use";
import Transition from "../utility/Transition";
import { FaExclamationTriangle } from "react-icons/fa";

export default function UnderConstruction() {
  const [isDismissed, setIsDismissed] = useLocalStorage<boolean>(
    "construction-banner-dismissed",
    false
  );

  return (
    <Transition
      show={!isDismissed}
      {...{
        enter: "transition ease-out duration-200",
        enterFrom: "opacity-0 translate-y-1",
        enterTo: "opacity-100 translate-y-0",
        leave: "transition ease-in duration-150",
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "opacity-0 translate-y-1",
      }}
    >
      <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
        <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="p-2 rounded-lg bg-yellow-300 shadow-lg sm:p-3">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-yellow-400 text-yellow-800">
                  <FaExclamationTriangle />
                </span>
                <p className="ml-3 font-medium text-yellow-900 truncate">
                  <span className="md:hidden">We're still under construction.</span>
                  <span className="hidden md:inline">
                    Thanks for visiting. Parts of this site are still under construction.
                  </span>
                </p>
              </div>

              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                <button
                  type="button"
                  className="-mr-1 flex p-2 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-500 transition ease-in-out duration-150"
                  aria-label="Dismiss"
                  onClick={() => setIsDismissed(true)}
                >
                  <svg
                    className="h-6 w-6 text-yellow-800"
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
          </div>
        </div>
      </div>
    </Transition>
  );
}
