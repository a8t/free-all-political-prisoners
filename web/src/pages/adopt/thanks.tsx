import React, { useState } from "react";

import Layout from "../../components/shared/layout";
import { fides, perry } from "../../images";
import SEO from "../../components/seo";
import ReactModal from "react-modal";
import { useScrollLock } from "../../components/utility/useScrollLock";
import { usePromptClose } from "../../components/utility/usePromptClose";
import { Link } from "gatsby";

const AdoptThanksPage = () => {
  return (
    <Layout rootClassnames="bg-gray-50 overflow-hidden">
      <SEO title="Adopt a Political Prisoner | ICHRP Canada" />
      {/*
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
*/}
      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col">
            <h1 className="m-auto text-4xl md:text-6xl font-bold text-center">
              Thank you for registering.
            </h1>
            <p className="text-center my-4">You'll hear back in the next two days.</p>
            <blockquote className="mt-20">
              <div className="max-w-3xl mx-auto text-center  sm:text-xl md:text-2xl leading-9 font-medium text-gray-900">
                <p>
                  "Political, moral, material, and financial support were our lifeline when we were
                  imprisoned under the fascist Marcos regime."
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img className="mx-auto h-10 w-10 rounded-full" src={perry} alt="" />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base leading-6 font-medium text-gray-900">
                      Christopher Sorio
                    </div>
                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>
                    <div className="text-base leading-6 font-medium text-gray-500">
                      BAYAN Canada Chairperson <br className="sm:hidden" />
                      <span className="hidden sm:inline">•</span> Former political prisoner
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdoptThanksPage;
