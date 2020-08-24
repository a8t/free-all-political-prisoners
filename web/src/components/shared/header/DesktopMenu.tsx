import React from "react";
import { FaRegEnvelope, FaQuestion, FaRegCalendarAlt } from "react-icons/fa";
import DesktopMenuItem from "./DesktopMenuItem";

const DesktopMenu = ({ shouldHeaderBeTransparent }) => (
  <nav className="hidden md:flex justify-center self-center md:ml-auto md:mr-2 xl:mr-auto">
    <DesktopMenuItem
      shouldHeaderBeTransparent={shouldHeaderBeTransparent}
      linkTo="/act"
      name="Act"
      items={[
        {
          title: "Calendar of Activities",
          body: "Learn about upcoming webinars, days of action, and more.",
          icon: <FaRegCalendarAlt className="w-6 h-6" />,
        },
        {
          title: "Write",
          body: "Write a letter",
          icon: <FaRegEnvelope className="w-6 h-6" />,
        },
      ]}
    />
    <DesktopMenuItem
      shouldHeaderBeTransparent={shouldHeaderBeTransparent}
      linkTo="/learn"
      name="Learn"
      items={[
        {
          title: "What is a political prisoner?",
          body: "Why are people being imprisoned in the Philippines",
          icon: <FaQuestion />,
        },
        {
          title: "On Philippine Prisons",
          body: "this is the body",
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          ),
        },
        {
          title: "Meet Political Prisoners",
          body: "this is the body",
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          ),
        },
      ]}
    />
    <DesktopMenuItem
      shouldHeaderBeTransparent={shouldHeaderBeTransparent}
      linkTo="/join"
      name="Join"
      items={[
        {
          title: "Become a member of ICHRP Canada",
          body: "Learn how you can continue the fight",
          icon: (
            <svg viewBox="0 0 603.07 603.07" className="p-2">
              <defs>
                <style>{".prefix__cls-1{fill:#fff}"}</style>
              </defs>
              <path
                className="prefix__cls-1"
                d="M313.42 432.49c-.38.76-.75 1.52-1.13 2.27a3.21 3.21 0 002.14-.63c-.34-.55-.68-1.13-1.01-1.64zM332 459.53c-5.82-7.53-11.22-15.34-16.3-23.36-4.35 4.05-8.77 8.1-5.8 15.42-.8.16-1 .26-1.12.22-2.14-.73-1.44-3.64-3.87-4.69-7.78 14.29-19.07 25.58-32.85 36.12 2.91-.12 4.53-.23 6.16-.22a1.28 1.28 0 011.42 1.13c.07.89-.58 1-1.27 1.1-6.45.68-12 2.69-13.78 9.87-2.71-1.46.14-4.11-1.87-5.61-3.11 1.63-6.15 3.37-9.24 5 2.65 4.91 5.53 9.7 8.64 14.33 5.44 8.1 12.22 16.19 21.64 18.71s21.48-3.56 21.57-13.31c2.9 11.94 6.29 24.68 15.6 32.71s26.51 7.77 31.57-3.42a30.28 30.28 0 0030.37 15.75c-2.81-12.61 15.83-17.88 28.58-15.78s30.57 2.57 33.45-10C399.46 526 360.18 496 332 459.53z"
              />
              <path
                className="prefix__cls-1"
                d="M525.27 94.83c.48-6.43-5.19-12.26-11.55-13.32s-12.89 1.84-17.61 6.23a86.14 86.14 0 0015.66-42.13c.58-6.76-.68-33.83-15.41-21.21-9.53 8.15-13.11 36.43-18 48.23-7.79 18.69-17.44 36.78-30.88 52.06C415.6 160.91 367.41 177 323.52 197s-89.06 50.12-100.54 97c-.86-45.74 44.16-77.7 85.52-97.26 34.66-16.4 81.35-35.29 101.23-70.24 3.07-5.41 5.37-12.61 1.48-17.47-3.62-4.52-10.42-4.32-16.18-3.72 1.33-6 6.42-10.34 9.58-15.63A26.13 26.13 0 00376 50.82c12.81-3.14 6.19-51.73-16.29-49.22-16.92 58-35.42 118.77-78.57 161.11-10.16 10-21.37 18.8-31.35 28.95a167 167 0 00-14.95 17.67c-8.4 12.39-16.3 25.07-23.48 38.26-6.38 11.71-7 23.06-1 34.78 2.83 5.46 2.26 10.47 0 16-4.07 10-10.44 18.47-16 27.51-4.66 7.61-3.92 12.42 2.53 18.6a37.69 37.69 0 004.55 3.7c5.32 3.72 5.35 3.69 3.25 9.74-.5 1.45-1.09 2.87-1.68 4.29-.95 2.32-2.24 4.57-2.32 7.13-.1 3.51 4.08 5.57 4.09 8.13 0 3.16-1.73 6.38-.16 9.69.77 1.63 2.18 3.19 2.32 4.85a41.38 41.38 0 003.95 14c1.84 4 2.49 8 4.39 12 1.25 2.59 3.6 11.87 6.85 12.21 1.23.13 2.39-.18 3.6.16.34-5.1.55-9.62 2.93-14.34a27.57 27.57 0 014.24-6.18c1.55-1.7 4-2.84 5.43-4.53-11.37 13.72-3.76 37.64.51 52.88a177.44 177.44 0 0013 33.21c3.28-2 6.45-4.26 9.69-5.95.84-.44 2-.82 1.81-2.08s-1.37-1.33-2.32-1.62-2-.45-2.91-.76-3.31.53-2.91-1.59c.34-1.79 2.55-1.08 3.4-.61 4.64 2.6 6.41-.36 8-3.81.84-1.82 0-5.7 2.22-5.26 2.61.53-.07 3.59.12 5.57a5 5 0 001.12 3.22c1.08 1.07 1.77-.11 2.49-.66 11.93-8.88 22.18-19.3 29.36-32.48.52-1 1.73-1.93.69-3.12-.86-1-2.11-.44-3.26-.43-2.34 0-4.21 2.69-7 1.32 1.69-2.67 4.21-3 6.57-3.64 1.6-.42 1.93-.59 1.75-2.95-.26-3.31-2.1-6.61-1.33-10.37 2.75 1.31 2.49 3.87 3.59 5.61 2.52 4 4.74 4.07 6.88-.07.49-.95 1-1.9 1.44-2.85-17.32-28.8-30.83-60-44.19-90.95A138.24 138.24 0 00335 383.53c15 4.43 31.72 6.13 45.76-.72s23.5-24.52 17-38.74c22.44 5.87 70.67-36.26 41.45-42.39 6.73.72 14 .55 20.53-1.49a61.67 61.67 0 0012.51-6.05c7.73-4.52 15.5-9.31 21.43-16s9.86-15.72 8.56-24.59c-2.12-14.37-14.08-16.33-25.89-16.47-.68-5 5.43-7.79 10.13-9.7 19.6-7.95 32.31-30.17 29.23-51.1-1.15-7.85-8.84-23.74-19.45-14.49 17.27-15.05 27.37-44.95 29.01-66.96zM241.6 402.88c-.84 0-1.9.53-2.58-.8 1-1.4 2.56-.56 3.79-.88 1.45-.38 2.19-.68.84-2.21a63.45 63.45 0 01-3.73-5.25c3.36-.28 4 2.42 5.49 3.82.49.44-.76 2.05 1 1.41a1.59 1.59 0 001.19-2.15c-.35-1.39-1.48-2.7-.6-4.74 5.49 8.55 4.72 7.93 10 8.87-.85 1.68-2.51 1.18-3.7 1.29-4 .41-4.68 1-4.58 4.84 0 .87.52 1.8-.2 2.65-1.4-.25-1.27-1.28-1.36-2.16-.51-4.2-1.1-4.68-5.56-4.69zm8.08 46.53a39.72 39.72 0 013.95-4.47c.64-.66 1.42-1.1 2.19-.07.61.82 0 1.28-.5 1.87a37.29 37.29 0 00-4 4.87c-2.46 4-1.79 6.76 1.9 9.65 1.37 1.07 2.62 2.26 4.58 4-9.88-1.26-13.16-8.52-8.12-15.85zm10.18 1.2c-2.34-2.59-.24-5.55-1.84-7.76-1.82-2.49-4.62-.94-6.85-1.57 0-1.8 1.33-1.75 2.11-1.57 4.89 1 5-2.22 5.24-5.52.05-.89-.48-2.07 1.2-2.59.91 2.29.24 5 2 7.17 1.29 1.58 2.1 2.46 4.15 1.67 1.32-.53 2.87-.94 4 1.19-5.3.75-9.43 2.7-10.01 8.98zm31.53-41c2.21.22 1.77 2 1.95 3.08.83 5 1.24 5.39 6.17 4.77.61-.08 1.2-.31 1.81.19.28 1.59-1.19 1.6-1.9 1.52-4.95-.49-4.71 2.79-4.62 6.06 0 .87.76 2-1 2.67-1.22-2 0-5.13-2.91-6.6.53 1.88-.84 2.63-1.92 3.55-6.93 5.92-15.24 9.45-23.27 13.46-.67.34-1.3.78-1.91-.11-.74-1.09 0-1.64.79-2 3.1-1.61 6.21-3.2 9.37-4.7a83.21 83.21 0 0015.31-10c.58-.46 1.42-.64.78-1.61a1.44 1.44 0 00-2-.41 9.65 9.65 0 01-5.06 1.15c4.02-3.41 9.52-4.78 8.41-11.04zm-11-5.58c.72-.39 1.38-.89 2.08-1.33a1.05 1.05 0 011.54.16 1.12 1.12 0 01-.24 1.81c-1.36.89-2.8 1.7-4.06 2.47-9.36 4.49-18.51 5.77-27.56-.26-.67-.44-1.94-.78-1-2.07s1.54-.4 2.34.11c9.12 5.9 18.04 3.9 26.87-.92z"
              />
              <path
                className="prefix__cls-1"
                d="M201.9 392.23a3.4 3.4 0 00-.86-1.4 10.17 10.17 0 01-2.18-8.28c.43-3.09.7-5.76-2.06-8.25-2-1.77-1.68-4.56-.68-7.09a80.54 80.54 0 004-11.45c.62-2.71.24-4.17-2.56-5.5A17.85 17.85 0 01186.82 334c-.2-4.66 2-8.64 4.31-12.51 3.84-6.5 7.78-12.94 11.65-19.42 4.26-7.14 4.88-14.33.7-21.85a27.72 27.72 0 01-3.2-16.64c1-9.43 5.22-17.62 9.83-25.65a194 194 0 0115.56-22.68c-8.1 1.22-18.37 5.45-22.61 7.38-2.21 1-27.43 12.93-25 15.37-15.16-15-58.46-38-78.3-20.33-3.15 2.81-4.34 7-9.05 7.82a44.53 44.53 0 01-5 .24c-4.4.28-7 1.53-7.89 6 .24-1.27 9.14 3.41 10 4 13 8.7 27.7 22.76 32.6 37.94 5.39 16.67 5.74 34.84 10.59 51.67 4.75 16.51 9.87 32.93 19 47.62a164.44 164.44 0 0048.68 49.59 52.87 52.87 0 0013.85 6.68c-1.55-3.75-2.41-8.42-3.27-11.58-2.27-8.47-5.67-16.65-7.37-25.42z"
              />
            </svg>
          ),
        },
      ]}
      customRender={
        <div className="hidden md:block absolute inset-x-0 transform shadow-lg">
          <div className="absolute inset-0 flex">
            <div className="bg-white w-1/2" />
            <div className="bg-gray-50 w-1/2" />
          </div>
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
            <nav className="grid row-gap-10 px-4 py-8 bg-white sm:grid-cols-2 sm:col-gap-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
              <div className="space-y-5">
                <h3 className="text-sm leading-5 font-medium tracking-wide text-gray-500 uppercase">
                  Company
                </h3>
                <ul className="space-y-6">
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
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
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>About</span>
                    </a>
                  </li>
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span>Customers</span>
                    </a>
                  </li>
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
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
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                      <span>Press</span>
                    </a>
                  </li>
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
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
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Careers</span>
                    </a>
                  </li>
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span>Privacy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-5">
                <h3 className="text-sm leading-5 font-medium tracking-wide text-gray-500 uppercase">
                  Resources
                </h3>
                <ul className="space-y-6">
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>Community</span>
                    </a>
                  </li>
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      <span>Partners</span>
                    </a>
                  </li>
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
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
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Guides</span>
                    </a>
                  </li>
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center space-x-4 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
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
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Webinars</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="space-y-6 bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
              <div className="space-y-6">
                <h3 className="text-sm leading-5 font-medium tracking-wide text-gray-500 uppercase">
                  From the blog
                </h3>
                <ul className="space-y-6">
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150 sm:space-x-8"
                    >
                      <div className="hidden sm:block flex-shrink-0">
                        <img
                          className="w-32 h-20 object-cover rounded-md"
                          src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"
                          alt=""
                        />
                      </div>
                      <div className="space-y-1 w-0 flex-1">
                        <h4 className="text-base leading-6 font-medium text-gray-900 truncate">
                          Boost your conversion rate
                        </h4>
                        <p className="text-sm leading-5 text-gray-500">
                          Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum.
                          Viverra tempor id mus.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flow-root">
                    <a
                      href="#"
                      className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150 sm:space-x-8"
                    >
                      <div className="hidden sm:block flex-shrink-0">
                        <img
                          className="w-32 h-20 object-cover rounded-md"
                          src="https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                          alt=""
                        />
                      </div>
                      <div className="space-y-1 w-0 flex-1">
                        <h4 className="text-base leading-6 font-medium text-gray-900 truncate">
                          How to use search engine optimization to drive traffic to your site
                        </h4>
                        <p className="text-sm leading-5 text-gray-500">
                          Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum.
                          Viverra tempor id mus.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-sm leading-5 font-medium">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                >
                  View all posts →
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    />
  </nav>
);

export default DesktopMenu;
