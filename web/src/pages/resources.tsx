import React, { useState } from "react";

import Layout from "../components/shared/layout";
import { ReadingDoodle } from "../images";
import SEO from "../components/seo";
import { graphql, Link, useStaticQuery } from "gatsby";
import { FaFolder } from "react-icons/fa";
import { FileDownloads } from "../components/shared/FileDownload";
import { PrisonerProfileFileDownloads } from "../components/shared/FileDownload";

const ResourcesPage = () => {
  const {
    conceptPaper,
    howToSupport,
    prisonsAndPolitics,
    repression,
    letterGAC,
    letterEmbassy,
    letterGRP,
    letterhead,
    letterMyles,
  } = useStaticQuery(graphql`
    query ResourceFiles {
      conceptPaper: file(absolutePath: { glob: "**/resources/01_PP Campaign Info.docx" }) {
        publicURL
        extension
      }
      howToSupport: file(absolutePath: { glob: "**/resources/02_How to Support a PP.docx" }) {
        publicURL
        extension
      }
      prisonsAndPolitics: file(
        absolutePath: { glob: "**/resources/03_Prisons and Politics in the Philippines.docx" }
      ) {
        publicURL
        extension
      }
      repression: file(
        absolutePath: { glob: "**/resources/04_Repression of Activists in the Philippines.docx" }
      ) {
        publicURL
        extension
      }
      letterGAC: file(absolutePath: { glob: "**/resources/letter_global_affairs_canada*.docx" }) {
        publicURL
        extension
      }
      letterEmbassy: file(absolutePath: { glob: "**/resources/letter_ca*.docx" }) {
        publicURL
        extension
      }
      letterGRP: file(absolutePath: { glob: "**/resources/letter_grp*.docx" }) {
        publicURL
        extension
      }
      letterhead: file(absolutePath: { glob: "**/resources/Letterhead*.docx" }) {
        publicURL
        extension
      }
      letterMyles: file(absolutePath: { glob: "**/resources/MylesLetter.pdf" }) {
        publicURL
        extension
      }
    }
  `);

  return (
    <Layout isContentFullWidth rootClassnames="bg-gray-100">
      <SEO title="Resources | Set Them Free | ICHRP Canada" />

      <div className="min-h-screen bg-gray-200 relative">
        <header className="bg-indigo-700 pb-48 pt-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white  flex flex-row justify-start items-center">
            <section className=" text-white mt-4 max-w-prose space-y-2">
              <h1 className="text-5xl leading-tight font-bold text-white">Campaign Resources</h1>
              <p>Download backgrounders, sample letters, profiles of prisoners, and more.</p>
              <p>
                If there are any resources you'd like added, please contact{" "}
                <a className="text-blue-300 underline" href="mailto:info@ichrpcanada.ca">
                  info@ichrpcanada.ca
                </a>
                .
              </p>

              <p>
                A full archive of these files (except the prisoner profiles) can be accessed{" "}
                <a
                  className="text-blue-300 underline"
                  href="https://drive.google.com/drive/folders/1SoNKFhrpbXhJgtpyBrcwCWuxcCCx1e5H?usp=sharing"
                >
                  here
                </a>{" "}
                and downloaded all at once.
              </p>
            </section>
            <img
              src={ReadingDoodle}
              alt="Canada-Philippines Solidarity for Human Rights"
              style={{ width: 300, marginLeft: "auto" }}
            />
          </div>
        </header>
        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 space-y-12 ">
            {[
              {
                title: "Campaign overview documents",
                subtitle:
                  "Background documents for organizations interested in joining the campaign, sponsoring a prisoner, or educating about the situation in the Philippines",
                body: (
                  <FileDownloads
                    files={[
                      {
                        title: "Campaign concept paper",
                        subtitle: "",
                        extension: conceptPaper.extension,
                        downloadLink: conceptPaper.publicURL,
                      },
                      {
                        title: "How to support a political prisoner",
                        subtitle: "",
                        extension: howToSupport.extension,
                        downloadLink: howToSupport.publicURL,
                      },
                      {
                        title: "Prisons and politics in the Philippines",
                        subtitle: "",
                        extension: prisonsAndPolitics.extension,
                        downloadLink: prisonsAndPolitics.publicURL,
                      },
                      {
                        title: "Repression of activists in the Philippines",
                        subtitle: "",
                        extension: repression.extension,
                        downloadLink: repression.publicURL,
                      },
                    ]}
                    itemIconColor="bg-blue-500"
                    itemBodyColor="bg-blue-50"
                  />
                ),
              },
              {
                title: "Political representative letter templates",
                subtitle: "Templates of letters than can be sent to government representatives",
                body: (
                  <FileDownloads
                    files={[
                      {
                        title: "To the Philippine government",
                        subtitle: "",
                        extension: letterGRP.extension,
                        downloadLink: letterGRP.publicURL,
                      },
                      {
                        title: "To Canada's Embassy in Manila",
                        subtitle: "",
                        extension: letterEmbassy.extension,
                        downloadLink: letterEmbassy.publicURL,
                      },
                      {
                        title: "To Global Affairs Canada",
                        subtitle: "",
                        extension: letterGAC.extension,
                        downloadLink: letterGAC.publicURL,
                      },
                    ]}
                    itemIconColor="bg-cool-gray-500"
                    itemBodyColor="bg-cool-gray-50"
                  />
                ),
              },
              {
                title: "Personal moral support letters",
                subtitle:
                  "Documents relating to sending letters of moral support directly to political prisoners.",

                body: (
                  <FileDownloads
                    files={[
                      {
                        title: "Example letter • Miles Albasin",
                        subtitle: "",
                        extension: letterMyles.extension,
                        downloadLink: letterMyles.publicURL,
                      },
                      {
                        title: "Blank letterhead",
                        subtitle: "",
                        extension: letterhead.extension,
                        downloadLink: letterhead.publicURL,
                      },
                    ]}
                    itemIconColor="bg-pink-500"
                    itemBodyColor="bg-pink-50"
                  />
                ),
              },
              {
                title: "Prisoner profiles",
                subtitle: "Learn more about a specific prisoner.",
                body: <PrisonerProfileFileDownloads />,
              },
            ].map(({ title, body, subtitle }, index, arr) => (
              <StepSection {...{ title, subtitle, body }} key={title} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

const StepSection = ({ title, subtitle, body }) => {
  return (
    <section className="bg-white rounded-lg shadow max-w-7xl overflow-hidden">
      <header className=" px-4 py-5 border-b border-gray-200 sm:px-6 bg-gray-100">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          <div className="sm:flex items-center">
            <FaFolder className="mr-2 text-gray-500 mb-2 sm:mb-0" /> <span>{title}</span>
          </div>
        </h3>
        <p className="mt-1 text-sm text-gray-500 max-w-prose">{subtitle}</p>
      </header>
      <div className=" overflow-visible m-6 ">{body}</div>
    </section>
  );
};

export default ResourcesPage;
