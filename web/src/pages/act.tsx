import React from "react";

import Layout from "../components/shared/layout";
import { fappp, write, help } from "../images";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { cn } from "../lib/helpers";
import {
  FaArrowRight,
  FaCalendar,
  FaEnvelopeOpenText,
  FaHandHoldingHeart,
  FaPencilAlt,
  FaRegHandPaper,
} from "react-icons/fa";

const items = [
  {
    title: "Adopt a prisoner",
    body:
      "Provide regular support for the immediate and long-term needs of a political prisoner. Make a lasting impact.",
    linkBody: "Adopt",
    linkUrl: "/adopt",
    icon: <FaHandHoldingHeart className="w-5 h-5" />,
  },
  {
    title: "Write a letter",
    body: "Use your voice! Join our letter-writing and lobbying campaigns.",
    linkBody: "Write",
    comingSoon: true,
    linkUrl: "/write",
    icon: <FaEnvelopeOpenText className="w-5 h-5" />,
  },
  {
    title: "Calendar of activities",
    body: "Get involved with global days of action.",
    linkBody: "See calendar",
    linkUrl: "#",
    comingSoon: true,
    icon: <FaCalendar className="w-5 h-5" />,
  },
];

const ItemCard = ({ title, body, linkBody, linkUrl, comingSoon, icon }) => {
  const inner = (
    <article
      className={cn(
        "bg-gray-50 ease-in flex sm:flex-col xl:flex-row rounded-md",
        comingSoon
          ? "opacity-50 pointer-events-none"
          : cn(
              "relative bottom-0 hover:bottom-1 ",
              "transform hover:scale-105",
              "shadow-xs hover:shadow-md",
              "transition-all duration-75 ease-out hover:ease-in"
            ),
        "group"
      )}
    >
      <div className="py-8 px-4 text-gray-600 flex flex-col flex-1">
        <h3 className="font-bold mb-4 text-xl flex items-center">
          <span className="text-gray-500 mr-4">{icon}</span> {title}
        </h3>
        <div className="mb-4">{body}</div>

        {comingSoon ? (
          <span className="text-gray-400 mt-auto"> (Coming soon)</span>
        ) : (
          <Link className="text-blue-600 mt-auto flex items-center" to={linkUrl}>
            {linkBody} <FaArrowRight className="text-sm ml-2 opacity-75" />
          </Link>
        )}
      </div>
    </article>
  );

  return comingSoon ? inner : <Link to={linkUrl}>{inner}</Link>;
};

const ActPage = () => (
  <Layout rootClassnames="bg-white">
    <SEO title="Act | Set Them Free | ICHRP Canada" />

    <header className="pb-5 border-b border-gray-200 mt-12">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Act</h3>

      <p className="max-w-4xl text-sm leading-5 text-gray-500 mt-4"></p>
    </header>

    <div className={cn("grid gap-20", "sm:grid-cols-2 sm:gap-16", "lg:gap-2", "mt-8 mb-24")}>
      <section className="grid gap-8">
        {items.map(({ title, body, linkBody, linkUrl, comingSoon, icon }) => (
          <ItemCard
            key={title}
            title={title}
            body={body}
            linkBody={linkBody}
            linkUrl={linkUrl}
            comingSoon={comingSoon}
            icon={icon}
          />
        ))}
      </section>
      <section className="flex items-center flex-col ml-auto">
        <figure className="sticky top-48">
          <img src={fappp} className="w-96 rounded-md shadow-xl" />
          <figcaption className="mt-8 text-gray-400 text-sm">
            <span className="italic">Free All Political Prisoners in the Philippines</span> by Joy
            Zhang
          </figcaption>
        </figure>
      </section>
    </div>
  </Layout>
);

export default ActPage;
