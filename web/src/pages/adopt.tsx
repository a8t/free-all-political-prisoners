import React, { useState } from "react";

import Layout from "../components/shared/layout";
import { fides } from "../images";
import SEO from "../components/seo";
import ReactModal from "react-modal";
import { useScrollLock } from "../components/utility/useScrollLock";
import { usePromptClose } from "../components/utility/usePromptClose";
import { Link } from "gatsby";

const Steps = () => {
  return (
    <div className="lg:border-t lg:border-b lg:border-gray-200">
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <ul className="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none">
          <li className="relative overflow-hidden lg:flex-1">
            <div className="border border-gray-200 overflow-hidden border-b-0 rounded-t-md lg:border-0">
              {/* Completed Step */}
              <a href="#" className="group">
                <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 group-focus:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" />
                <div className="px-6 py-5 flex items-start text-sm leading-5 font-medium space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full">
                      {/* Heroicon name: check */}
                      <svg className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-0.5 min-w-0">
                    <h3 className="text-xs leading-4 font-semibold uppercase tracking-wide">
                      Job Details
                    </h3>
                    <p className="text-sm leading-5 font-medium text-gray-500">
                      Vitae sed mi luctus laoreet.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li className="relative overflow-hidden lg:flex-1">
            <div className="border border-gray-200 overflow-hidden lg:border-0">
              {/* Current Step */}
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" />
              <div className="px-6 py-5 flex items-start text-sm leading-5 font-medium space-x-4 lg:pl-9">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                    <p className="text-indigo-600">02</p>
                  </div>
                </div>
                <div className="mt-0.5 min-w-0">
                  <h3 className="text-xs leading-4 font-semibold text-indigo-600 uppercase tracking-wide">
                    Application form
                  </h3>
                  <p className="text-sm leading-5 font-medium text-gray-500">
                    Cursus semper viverra.
                  </p>
                </div>
              </div>
              <div className="hidden absolute top-0 left-0 w-3 inset-0 lg:block">
                <svg
                  className="h-full w-full text-gray-300"
                  viewBox="0 0 12 82"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.5 0V31L10.5 41L0.5 51V82"
                    stroke="currentcolor"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </div>
          </li>
          <li className="relative overflow-hidden lg:flex-1">
            <div className="border border-gray-200 overflow-hidden border-t-0 rounded-b-md lg:border-0">
              {/* Upcoming Step */}
              <a href="#" className="group">
                <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 group-focus:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" />
                <div className="px-6 py-5 flex items-start text-sm leading-5 font-medium space-x-4 lg:pl-9">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                      <p className="text-gray-500">03</p>
                    </div>
                  </div>
                  <div className="mt-0.5 min-w-0">
                    <h3 className="text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wide">
                      Preview
                    </h3>
                    <p className="text-sm leading-5 font-medium text-gray-500">
                      Penatibus eu quis ante.
                    </p>
                  </div>
                </div>
              </a>
              <div className="hidden absolute top-0 left-0 w-3 inset-0 lg:block">
                <svg
                  className="h-full w-full text-gray-300"
                  viewBox="0 0 12 82"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.5 0V31L10.5 41L0.5 51V82"
                    stroke="currentcolor"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Modal = ({ isModalOpen, closeModal }) => {
  const handleCloseRequest = () => {
    const shouldClose = confirm("Are you sure you want to close this form?");

    if (shouldClose) {
      closeModal();
    }
  };

  usePromptClose(isModalOpen);
  //   useScrollLock(isModalOpen);

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseRequest}
      overlayClassname="bg-opacity-50 bg-gray-500 z-50"
      style={{
        overlay: { zIndex: 5050 },
        content: {
          overflow: "visible",
          margin: "auto",
          maxWidth: "60em",
          outline: "none",
          border: "none",
          background: "none",
        },
      }}
    >
      <section className="shadow-2xl m-auto my-4 bg-white">
        {/* <Steps /> */}
        <div className="p-8 prose overflow-y-auto">
          <p>
            SELDA will coordinate the project. Because PPs are all over the Philippines, SELDA has
            made suggested groupings of PPs that your area, organization, individual can adopt. This
            is to make sure all the PPs will share the attention of the campaign and not just a few
            known ones.
          </p>
          <p>What to do:</p>
          <p>
            From the suggested prison/jail or groups of PPs your organization will adopt, choose
            from the list of pps and their profiles provided whom to adopt. It can be one or two,
            three or the whole group.
          </p>
          <p>As an adaptor, the following are things you could do:</p>
          <ul className="list-disc list-inside space-y-8">
            <li>
              Write or fax letters, send postcards addressed to Office of the President, Department
              of Justice and Executive Secretary Paquito Ochoa for the release of the particular
              prisoner and of all PPs through a general, unconditional and omnibus amnesty.
            </li>
            <li>
              Join campaign activities, forum, discussions, Senate/HOR lobbying on matters
              pertaining to PPs.
            </li>
            <li>
              For the elderly. Sick, women, longtime prisoners, appeal for their release through
              recognizance or humanitarian reasons
            </li>
            <li>
              Write a letter of support to the particular pp relaying your effort to campaign for
              their like release. Course it to SELDA.
            </li>
            Visit them if you can or send them material, financial support for their needs in prison
            and for the needs of their families. You can course it through SELDA if you cannot visit
            yourself.
            <li>
              Adopt a PPs child scholar. From the list of PPs and their profiles you can determine
              the child scholar to adopt. It ranges from elementary, high school and college.
              Elementary – P 4,000.00 or $100.00 per year High School – P 10,000.00 or $ 250.00 Per
              year College – P 20,000.00 or $ 500.00 per year
            </li>
          </ul>

          <p>
            Help pps and their families in their livelihood projects. These projects are important
            so they won’t be idle, will be productive and able to generate funds for self-reliance.
            Monetary contribution to start projects and helping sell pps products.
          </p>
        </div>
      </section>
    </ReactModal>
  );
};

const AdoptPage = () => {
  return (
    <Layout rootClassnames="bg-gray-50 overflow-hidden">
      <SEO title="Adopt a Political Prisoner | ICHRP Canada" />

      <header className="my-12 text-base max-w-prose mx-auto lg:max-w-none">
        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
          Act
        </p>
        <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Adopt a prisoner
        </h1>
        <div className="relative text-base max-w-prose mx-auto mb-8 lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p className="text-lg text-gray-500 leading-7">
            Make a lasting impact by providing regular{" "}
            <span className="text-red-700">political, moral, and material support </span>
            for a political prisoner and their family.
          </p>
        </div>
      </header>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div className="relative mb-12 lg:mb-0">
          <div className="mb-10 prose text-gray-500 mx-auto lg:max-w-none">
            <h2>What does adopting a prisoner mean?</h2>
            <p>It means directly affecting the lives of political prisoners and their families.</p>
            <p>
              Adopting a prisoner means joining our campaigning, letter-writing, fundraising and
              donating efforts, with focus on one or more particular prisoners within the framework
              of freeing all political prisoners in the Philippines.
            </p>

            <h2>How do I get started?</h2>
            <p>
              On the next page, you will be guided through the Adopt A Prisoner registration
              process.
            </p>
            <p>There are three simple steps to adopting a political prisoner in the Philippines.</p>
            <ol>
              <li>Select one or more prisoners to adopt.</li>
              <li>Select one or more forms of action to commit to.</li>
              <li>Fill out the registration form.</li>
            </ol>
            <p>That's it! After that, you will be contacted by a member of ICHRP Canada.</p>

            <h5>Ready to make a difference?</h5>
          </div>
          <Link to="adopt/form" className="flex text-base max-w-prose mx-auto lg:max-w-none">
            <button className="rounded-md focus:shadow-outline-blue focus:border-blue-300 border-transparent border-4 -mx-2">
              <span className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">
                Get started
              </span>
            </button>
          </Link>
        </div>
        <div className="relative text-base max-w-prose mx-auto lg:max-w-none">
          <svg
            className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
          </svg>
          <blockquote className="relative bg-white rounded-lg shadow-lg">
            <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
              <div className="relative text-lg text-gray-700 leading-7 mt-8">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  There are two areas of work that need to be done. First is in the area of{" "}
                  <span className="text-indigo-700 font-bold">political pressure</span>. Second is
                  in <span className="text-indigo-700 font-bold">material support</span>. We have to
                  bear financial pressures, like legal defence funds. Families need supports to
                  visit prisoners. We welcome any material and financial support.
                </p>
              </div>
            </div>
            <cite className="flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
              <div className="rounded-full border-2 border-white mr-4 sm:-mt-15 sm:mr-6">
                <img
                  className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300 object-cover"
                  src={fides}
                  alt=""
                />
              </div>
              <span className="text-indigo-300 font-semibold leading-6">
                <strong className="text-white font-semibold mr-2">Fides Lim</strong>
                <br className="sm:hidden" />
                Spokesperson of KAPATID
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </Layout>
  );
};

export default AdoptPage;
