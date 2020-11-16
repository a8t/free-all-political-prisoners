import React, { useState } from "react";
import mime from "mime-types";

import Layout from "../components/shared/layout";
import { fappp } from "../images";
import SEO from "../components/seo";
import { graphql, Link, useStaticQuery } from "gatsby";
import { cn } from "../lib/helpers";
import {
  FaArrowRight,
  FaCloudDownloadAlt,
  FaDownload,
  FaFile,
  FaFileDownload,
  FaFilePdf,
  FaFileWord,
  FaRegFilePdf,
} from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { FileDownloads } from "../components/shared/FileDownload";

const useWriteQuery = () => {
  const { allAirtablePrisoners } = useStaticQuery(graphql`
    query PrisonerProfiles {
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

  return allAirtablePrisoners.nodes;
};

const WritePage = () => {
  const prisoners = useWriteQuery();

  const result = prisoners.map(({ data: { fullName, profile } }) => {
    const { url, type } = profile.raw[0];

    return {
      title: fullName,
      downloadLink: url,
      extension: mime.extension(type),
    };
  });

  return (
    <Layout isContentFullWidth rootClassnames="bg-gray-100">
      <SEO title="Act | Set Them Free | ICHRP Canada" />

      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-900 pb-40 pt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl leading-tight font-bold text-white">Demand their release!</h1>
            <h2 className="text-lg text-white mt-4 font-thin max-w-prose ">
              Contact your political representatives with{" "}
              <span className="font-bold">prisoner profiles</span> and{" "}
              <span className="font-bold">letter templates</span> to call for the release of all
              political prisoners in the Phlippines.
            </h2>

            <p className={"mt-10"}>
              It's simple:
              <ol className="list-decimal ml-4 mt-2 space-y-1">
                <li>Download prisoner profiles</li>
                <li>Download letter templates</li>
                <li>Send letters to political representatives</li>
              </ol>
            </p>
          </div>
        </header>
        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 pt-12">
              {[
                {
                  title: "Download prisoner profiles",
                  body: (
                    <>
                      <p className="mt-2 max-w-prose">
                        Download one or more{" "}
                        <span className="font-bold">profiles of political prisoners </span>to
                        advocate for. You will send this to the political representatives you choose
                        in the next step.
                      </p>

                      <FileDownloads
                        itemIconColor="bg-teal-500"
                        itemBodyColor="bg-teal-50"
                        files={result}
                      />
                    </>
                  ),
                },
                {
                  title: "Download letter templates",
                  body: (
                    <>
                      <p className="mt-2">
                        Download our prepared <span className="font-bold">letter templates</span> to
                        be sent to the Government of the Philippines and the Government of Canada.
                      </p>

                      <FileDownloads
                        files={[
                          { title: "Letter to the Philippine government", subtitle: "" },
                          { title: "Letter to Canada's Embassy in Manila", subtitle: "" },
                        ]}
                        itemIconColor="bg-pink-500"
                        itemBodyColor="bg-pink-50"
                      />
                    </>
                  ),
                },
                {
                  title: "Send letters",
                  body: (
                    <>
                      <p className="mt-2">
                        Send the letters you downloaded to the email addresses listed in the
                        template!
                      </p>
                    </>
                  ),
                },
              ].map(({ title, body }, index, arr) => (
                <StepSection
                  {...{ step: index + 1, title, body, final: index === arr.length - 1 }}
                />
              ))}
            </div>

            {/* /End replace */}
          </div>
        </main>
      </div>
    </Layout>
  );
};

const StepSection = ({ step, title, body, final = false }) => {
  return (
    <section
      className={cn(
        "border-l ml-2 sm:ml-4 pb-12 overflow-visible",
        final ? "border-transparent" : "border-green-300"
      )}
    >
      <header className="flex items-center -ml-3 sm:-ml-4 max-w-prose">
        <div className="rounded-full border-green-300 text-green-600 bg-white border-2 w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center text-xs sm:text-sm">
          {step}
        </div>

        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide ml-4">{title}</h2>
      </header>

      <div className="ml-6 sm:ml-8 overflow-visible">{body}</div>
    </section>
  );
};

export default WritePage;
