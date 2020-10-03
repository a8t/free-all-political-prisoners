import React from "react";
import { FaUser, FaExclamationCircle, FaBook } from "react-icons/fa";
import { Link } from "gatsby";

interface ISectionItem {
  icon: React.ReactElement;
  title: string;
  body: string;
  link: string;
  linkText?: string;
}

const SectionItem: React.FC<ISectionItem> = ({
  icon,
  title,
  body,
  link,
  linkText = "See More",
}) => {
  return (
    <li className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg leading-6 font-medium text-gray-900">{title}</h4>
        <p className="my-2 text-base leading-6 text-gray-500">{body}</p>
        <Link className="text-base leading-6 text-blue-500" to={link}>
          {linkText}
        </Link>
      </div>
    </li>
  );
};

const ItemsSection: React.FC<{
  label: string;
  title: string;
  subtitle: string;
  items: Array<ISectionItem>;
}> = ({ label, title, subtitle, items }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-red-600 font-semibold tracking-wide uppercase">
            {label}
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {title}
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">{subtitle}</p>
        </div>
        <div className="mt-10">
          <ul className="grid md:grid-cols-2 md:gap-y-8 gap-x-10">
            {items.map(({ icon, title, body, link }) => (
              <SectionItem icon={icon} title={title} body={body} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;
