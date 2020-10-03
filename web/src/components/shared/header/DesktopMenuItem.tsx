import React, { useState, useRef, useEffect } from "react";
import Transition from "../../utility/Transition";
import { useClickAway, useLocation } from "react-use";
import { FaBook } from "react-icons/fa";
import { useHotkeys } from "react-hotkeys-hook";
import useHeaderScrollThreshold from "./useHeaderScrollThreshold";
import { Link } from "gatsby";
import { cn } from "../../../lib/helpers";

interface MainLink {
  title: string;
  body: string;
  icon?: React.ReactElement;
  linkUrl: string;
  disabled?: boolean;
}

interface ExtraLink {
  text: string;
  linkUrl: string;
  icon: React.ReactElement;
}

const DesktopMenuItem: React.FC<{
  name: string;
  items?: MainLink[];
  customRender?: React.ReactElement;
  linkTo: string;
  shouldHeaderBeTransparent: boolean;
  extraLinks?: ExtraLink[];
  itemIconBackgroundColor?: string;
  itemLinkColor?: string;
}> = ({
  name,
  items = [],
  linkTo,
  shouldHeaderBeTransparent,
  extraLinks = [],
  itemIconBackgroundColor,
  itemLinkColor,
}) => {
  const [shouldShow, setShouldShow] = useState(false);
  const open = () => setShouldShow(true);
  const close = () => setShouldShow(false);
  const toggle = () => setShouldShow(!shouldShow);

  const menuRef = useRef(null);

  // close when touching away or hitting escape
  useClickAway(menuRef, close, ["touchend", "click"]);
  useHotkeys("escape", close);

  // close immediately after changing location
  const { state } = useLocation();
  useEffect(() => {
    setImmediate(() => close());
  }, [state]);

  // const shouldShow = true;
  // const setShouldShow = () => {};

  if (items.length === 0) {
    return (
      <Link to={linkTo}>
        <button
          type="button"
          className={cn(
            `group inline-flex items-center mx-3 border-b-2 px-4 py-2 text-base leading-6 font-medium focus:outline-none`,
            shouldHeaderBeTransparent
              ? "text-gray-400 hover:text-gray-200 hover:border-gray-300 focus:text-gray-200 focus:border-gray-300 "
              : "text-gray-900 hover:text-gray-700 hover:border-gray-600 focus:text-gray-500 focus:border-gray-600 ",
            `transition ease-in-out duration-150  border-transparent focus:border-gray-400`
          )}
        >
          <span
            className={`uppercase tracking-widest text-sm ${
              shouldShow ? (shouldHeaderBeTransparent ? "text-gray-200" : "text-gray-500") : ""
            }`}
          >
            {name}
          </span>
        </button>
      </Link>
    );
  }

  return (
    <div
      onMouseEnter={open}
      onMouseLeave={close}
      className="-my-4 flex items-center relative"
      onFocus={open}
      onBlur={close}
    >
      <Link to={linkTo}>
        <button
          type="button"
          className={`group inline-flex items-center mx-3 border-b-2 px-4 py-2 text-base leading-6 font-medium focus:outline-none
            ${
              shouldHeaderBeTransparent
                ? "text-gray-400 hover:text-gray-200 hover:border-gray-300 focus:text-gray-200 focus:border-gray-300 "
                : "text-gray-900 hover:text-gray-700 hover:border-gray-600 focus:text-gray-600 focus:border-gray-600 "
            }
            transition ease-in-out duration-150  border-transparent 
            ${shouldShow ? "border-gray-400" : ""}`}
        >
          <span
            className={`uppercase tracking-widest text-sm ${
              shouldShow ? (shouldHeaderBeTransparent ? "text-gray-200" : "text-gray-500") : ""
            }`}
          >
            {name}
          </span>
        </button>
      </Link>

      <Transition
        show={shouldShow}
        {...{
          enter: "transition ease-out duration-100 delay-100",
          enterFrom: "opacity-0 -translate-y-24",
          enterTo: "opacity-100 translate-y-0",
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
        }}
      >
        <div
          className="hidden md:block absolute inset-x-0 transform shadow-lg left-0 bg-white w-96"
          style={{ top: 75, zIndex: -1 }}
          ref={menuRef}
        >
          <div className="rounded-lg shadow-lg w-96 ">
            <div className="rounded-lg shadow-xs w-96">
              <ul className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {items.map(({ title, body, icon, linkUrl, disabled }) => {
                  return (
                    <Link
                      to={linkUrl}
                      className={cn(
                        "-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150",
                        disabled && "opacity-50 cursor-not-allowed pointer-events-none"
                      )}
                    >
                      <span
                        className={`flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-md text-white sm:h-12 sm:w-12 ${itemIconBackgroundColor}`}
                      >
                        {icon}
                      </span>
                      <div className="space-y-1">
                        <p className="text-base leading-6 font-medium text-gray-900">{title}</p>

                        <p className="mt-2 mb-4 text-sm leading-5 text-gray-500">{body}</p>
                        {disabled ? (
                          <span className="text-xs leading-6 text-gray-900">(Coming soon)</span>
                        ) : null}
                      </div>
                    </Link>
                  );
                })}
              </ul>
              {extraLinks.length > 0 ? (
                <div className="bg-gray-50 h-16">
                  <div className="container mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                    {extraLinks.map(({ linkUrl, text, icon }) => (
                      <div className="flow-root">
                        <Link
                          to={linkUrl}
                          className="-m-3 p-3 space-x-3 flex items-center rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <span className="text-gray-400">{icon}</span>
                          <span>{text}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default DesktopMenuItem;
