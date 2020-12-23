import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FaDownload, FaFile, FaFilePdf, FaFileWord } from "react-icons/fa";
import { cn } from "../../lib/helpers";
import mime from "mime-types";

const FileDownload = ({ title, downloadLink, extension, itemIconColor, itemBodyColor }) => {
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
          "bg-red-500",
          "h-full"
        )}
      >
        <div className="flex h-full w-full">
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
      </a>
    </li>
  );
};

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
    <ul
      className="p-2 -m-2 mt-6 
    grid grid-rows-2 grid-flow-col auto-cols-max 
    overflow-x-auto overflow-y-visible 
    w-100 
    sm:overflow-visible sm:grid-flow-row sm:grid-rows-none gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3
  "
      style={{ gridTemplateRows: "repeat(auto-fill, 4em)" }}
    >
      {files.map(({ title, subtitle, downloadLink, extension }) => (
        <FileDownload
          title={title}
          downloadLink={downloadLink}
          extension={extension}
          itemIconColor={itemIconColor}
          itemBodyColor={itemBodyColor}
        />
      ))}
    </ul>
  );
};

export const PrisonerProfileFileDownloads = () => {
  const { allAirtablePrisoners } = useStaticQuery(graphql`
    query PrisonerProfilesFiles {
      allAirtablePrisoners(filter: { data: { Profile: { id: { ne: null } } } }) {
        nodes {
          data {
            fullName: Full_name
            profile: Profile {
              raw {
                filename
                url
                type
              }
            }
          }
        }
      }
    }
  `);

  const files = allAirtablePrisoners.nodes.map(({ data: { fullName, profile } }) => {
    const { url, type } = profile.raw[0];

    return {
      title: fullName,
      downloadLink: url,
      extension: mime.extension(type),
    };
  });

  return <FileDownloads files={files} itemIconColor="bg-teal-500" itemBodyColor="bg-teal-50" />;
};
