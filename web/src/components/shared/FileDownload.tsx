import React, { useState } from "react";
import { FaDownload, FaFile, FaFilePdf, FaFileWord } from "react-icons/fa";
import { cn } from "../../lib/helpers";

export const FileDownloads = ({
  files = [],
  itemIconColor,
  itemBodyColor,
}: {
  files: Array<{
    title: string;
    subtitle: string;
    downloadLink?: string;
    extra?: string;
    extension?: String;
  }>;
  itemIconColor?: string;
  itemBodyColor?: string;
}) => {
  return (
    <ul className="p-2 -m-2 mt-6 grid grid-rows-2 grid-flow-col auto-cols-max overflow-x-auto overflow-y-visible w-100 sm:overflow-visible sm:grid-flow-row sm:grid-rows-none gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {files.map(({ title, subtitle, downloadLink, extra, extension }) => {
        const [isHovered, setIsHovered] = useState(false);

        const Icon = { pdf: FaFilePdf, docx: FaFileWord, doc: FaFileWord }[extension] ?? FaFile;

        return (
          <li>
            <a
              href={downloadLink}
              className={cn(
                "block relative group",
                "rounded-md cursor-pointer",
                "transition-all duration-150",
                // "transform scale-100 hover:scale-10",
                "shadow-sm hover:shadow-md",
                "z-20 hover:z-40",
                "bg-teal-50"
              )}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex">
                <div
                  className={cn(
                    "flex-shrink-0 flex items-center justify-center w-16 text-white rounded-l-md flex-col",
                    itemIconColor
                  )}
                >
                  <Icon className="text-2xl mt-1" />
                  <span className="text-xs uppercase">{extension}</span>
                </div>

                <div
                  className={cn(
                    "flex-1 flex items-center justify-between border-t border-r border-b border-gray-200  rounded-r-md py-2",
                    itemBodyColor
                  )}
                >
                  <div className="flex-1 px-4 py-2 text-sm leading-5 whitespace-normal">
                    <h3 className="text-gray-900 font-medium group-hover:text-gray-600 transition ease-in-out duration-150">
                      {title}
                    </h3>
                    {/* <p className="text-gray-500">{subtitle}</p> */}
                  </div>
                  <div className="flex-shrink-0 pr-2">
                    <button
                      aria-label="Download"
                      title="Download"
                      className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent group-hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150"
                    >
                      <FaDownload className="text-2xl m-2" />
                    </button>
                  </div>
                </div>
              </div>
              {/* <Transition
                    as="aside"
                    show={!!extra && isHovered}
                    enter="transition-all duration-150"
                    enterFrom="opacity-0 "
                    enterTo="opacity-100 "
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100 "
                    leaveTo="opacity-0 "
                    className="absolute top-full w-full z-50 bg-cool-gray-50 p-3 rounded-md text-sm shadow-md flex flex-col"
                  >
                    <p className="text-gray-500">{extra}</p>
                    <p className="mt-4 text-teal-500 hover:underline m-auto">Download</p>
                  </Transition> */}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
