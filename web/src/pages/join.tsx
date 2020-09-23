import React, { useState } from "react";

import Layout from "../components/shared/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { cn } from "../lib/helpers";

const NotFoundPage = () => {
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  return (
    <Layout>
      <SEO title="Join | Set Them Free | ICHRP Canada" />

      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Join ICHRP
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              The International Coalition for Human Rights in the Philippines is a global network of
              organizations and instituions who come together in support of a just and lasting peace
              in the Philippines.
            </p>
          </div>
          <form
            action="#"
            method="POST"
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6"
            data-netlify="true"
            name="Join ICHRP"
          >
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              First name
              <input
                id="first_name"
                className="mt-1 form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                name="First name"
              />
            </label>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Last name
              <input
                id="last_name"
                className="mt-1 form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                name="Last name"
              />
            </label>

            <label
              htmlFor="organization"
              className="sm:col-span-2 block text-sm font-medium leading-5 text-gray-700"
            >
              Organization
              <input
                id="organization"
                className="mt-1 form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                name="Organization"
              />
            </label>

            <label
              htmlFor="email"
              className="sm:col-span-2 block text-sm font-medium leading-5 text-gray-700"
            >
              Email
              <input
                id="email"
                type="email"
                className="mt-1 form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                name="Email"
              />
            </label>

            <label
              htmlFor="message"
              className="sm:col-span-2 block text-sm font-medium leading-5 text-gray-700"
            >
              Message
              <textarea
                id="message"
                rows={4}
                className="mt-1 form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"
                defaultValue={""}
                name="Message"
              />
            </label>

            <label className="sm:col-span-2 flex items-start" htmlFor="privacy">
              <button
                name="privacy"
                onClick={() => setAcceptedPrivacy(!acceptedPrivacy)}
                role="checkbox"
                type="button"
                tabIndex={0}
                aria-checked="false"
                className={cn(
                  "bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline",
                  acceptedPrivacy ? "bg-indigo-600" : "bg-gray-200",
                  "flex-shrink-0"
                )}
              >
                {/* On: "translate-x-5", Off: "translate-x-0" */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200",
                    acceptedPrivacy ? "translate-x-5" : "translate-x-0"
                  )}
                />
              </button>

              <p className="ml-3 text-base leading-6 text-gray-500">
                By selecting this, you agree to the{" "}
                <Link to="/privacy" className="font-medium text-gray-700 underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </label>

            <button
              type="submit"
              name="submit"
              disabled={!acceptedPrivacy}
              className={cn(
                "sm:col-span-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white  transition ease-in-out duration-150",
                acceptedPrivacy
                  ? "bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  : "bg-gray-400 cursor-not-allowed"
              )}
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
