import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";

function Hero(props) {
  const { heroImg } = useStaticQuery(graphql`
    query {
      heroImg: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 900
            traceSVG: { color: "black", turnPolicy: TURNPOLICY_MINORITY, blackOnWhite: false }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <BackgroundImage
      Tag="section"
      fluid={heroImg.childImageSharp.fluid}
      backgroundColor={`#000000`}
      // className="h-screen"
    >
      <div
        className="h-screen container mx-auto flex flex-wrap flex-col justify-end pb-12"
        style={{ maxHeight: "80vh" }}
      >
        <main
          className="
          px-3 sm:px-6
          mx-auto lg:mx-0 lg:ml-auto sm:text-center lg:text-right"
        >
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-100 sm:text-5xl sm:leading-none md:text-6xl">
            Nobody should be
            <br />
            <span className="text-red-600"> imprisoned </span>
            for their
            <br />
            political beliefs
          </h2>
          <div
            className={`
              mt-3 sm:px-0 py-4 sm:mt-5 max-w-screen w-full md:mt-5 lg:mx-0 lg:ml-auto
              lg:max-w-4xl
            `}
          >
            <p className="text-base text-gray-200 sm:text-lg md:text-2xl ">
              There are over 600 political prisoners in the Philippines.{" "}
              <br className="hidden md:flex" />
              Join the movement to
              <span className="text-red-500"> set them free</span>.
            </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Get involved
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-red-700 bg-red-100 hover:text-red-600 hover:bg-red-50 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Find out more
              </a>
            </div>
          </div>
        </main>
      </div>
    </BackgroundImage>
  );
}

export default Hero;
