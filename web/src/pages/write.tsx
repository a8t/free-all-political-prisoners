import React from "react";

import Layout from "../components/shared/layout";
import { fappp } from "../images";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { cn } from "../lib/helpers";
import { FaArrowRight } from "react-icons/fa";

const items = [
  {
    title: "Write a letter",
    body: "Use your voice! Join our letter-writing and lobbying campaigns.",
    linkBody: "Write",
    linkUrl: "/write",
  },
  {
    title: "Adopt a prisoner",
    body:
      "Provide regular support for the immediate and long-term needs of a political prisoner. Make a lasting impact.",
    linkBody: "See prisoners",
    linkUrl: "/adopt",
  },
  {
    title: "Calendar of activities",
    body: "Get involved with global days of action.",
    linkBody: "See calendar",
    linkUrl: "#",
    comingSoon: true,
  },
];

const ItemCard = ({ title, body, linkBody, linkUrl, comingSoon }) => {
  const inner = (
    <article
      className={cn(
        "bg-gray-50 ease-in flex sm:flex-col xl:flex-row rounded-md",
        comingSoon
          ? "opacity-50 pointer-events-none"
          : [
              "relative bottom-0 hover:bottom-1 ",
              "transform hover:scale-105",
              "shadow-xs hover:shadow-md",
              "transition-all duration-75",
            ].join(" ")
      )}
    >
      <figure className={cn("bg-green-50", "max-w-56 h-56 w-56", "sm:w-full", "xl:w-56")}></figure>
      <div className="py-8 px-4 text-gray-600 flex flex-col flex-1">
        <h3 className="font-bold mb-4 block">
          {title} {comingSoon ? <span className="text-gray-400"> (Coming soon)</span> : null}
        </h3>
        <div className="mb-4">{body}</div>
        <Link className="text-blue-600 mt-auto flex items-center" to={linkUrl}>
          {linkBody} <FaArrowRight className="text-sm ml-2 opacity-75" />
        </Link>
      </div>
    </article>
  );

  return comingSoon ? inner : <Link to={linkUrl}>{inner}</Link>;
};

const WritePage = () => (
  <Layout rootClassnames="bg-white">
    <SEO title="Act | Set Them Free | ICHRP Canada" />

    <header className="pb-5 border-b border-gray-200 mt-12">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Write</h3>

      <p className="max-w-4xl text-sm leading-5 text-gray-500 mt-4">Please check back soon!</p>
    </header>

    <div className="relative bg-white mt-12">
      {/* <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
              Sapien tortor lacus arcu.
            </p>
            <dl className="mt-8 text-base leading-6 text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
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
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base leading-6 text-gray-500">
              Looking for careers?
              <a href="#" className="font-medium text-gray-700 underline">
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full_name" className="sr-only">
                  Full name
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    id="full_name"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Full name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    id="phone"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div className="relative rounded-md shadow-sm">
                  <textarea
                    id="message"
                    rows={4}
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className>
                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  </Layout>
);

export default WritePage;
