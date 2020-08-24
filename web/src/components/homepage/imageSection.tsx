import React from "react";
import { freekarina } from "../../images";
import { cn } from "../../lib/helpers";
import { Link } from "gatsby";
import { FaArrowRight } from "react-icons/fa";

interface ISectionItem {
  title: React.ReactNode;
  body: React.ReactNode;
  icon: React.ReactNode;
}

export const ImageSectionItem: React.FC<
  ISectionItem & {
    iconColor: string;
  }
> = ({ icon, title, body, iconColor }) => {
  return (
    <li>
      <div className="flex">
        <div className="flex-shrink-0">
          <div
            className={cn(
              "flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white",
              iconColor
            )}
          >
            {icon}
          </div>
        </div>
        <div className="ml-4">
          <h5 className="text-lg leading-6 font-medium text-gray-900">{title}</h5>
          <p className="mt-2 text-base leading-6 text-gray-500">{body}</p>
        </div>
      </div>
    </li>
  );
};

export const ImageSection: React.FC<{
  index: number;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  iconColor: string;
  items: Array<ISectionItem>;
  image: any;
  caption: React.ReactNode;
  sectionLink: string;
  sectionLinkText: React.ReactNode;
}> = ({
  index,
  title,
  subtitle,
  iconColor,
  items,
  image,
  caption,
  sectionLink,
  sectionLinkText,
}) => {
  const isLeft = index % 2 === 1;

  return (
    <section>
      {/* These are the decorative dots */}
      <svg
        className={
          isLeft
            ? "hidden lg:block absolute right-full transform translate-x-1/2 -translate-y-12"
            : cn(
                "hidden lg:block absolute left-full transform -translate-x-1/2",
                index === 0 ? "-translate-y-1/2" : "translate-y-12"
              )
        }
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg>

      <article className="relative mt-12 sm:mt-16 lg:mt-24 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-start">
        <header className={cn(isLeft ? "lg:col-start-2" : "lg:col-start-1")}>
          <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
            {title}
          </h4>
          <p className="mt-3 text-lg leading-7 text-gray-500">{subtitle}</p>
          <ul className="mt-10 space-y-10">
            {items.map(({ icon, title, body }) => (
              <ImageSectionItem title={title} body={body} icon={icon} iconColor={iconColor} />
            ))}
          </ul>

          <Link to={sectionLink} className="mt-6 flex items-center text-blue-500">
            {sectionLinkText} <FaArrowRight className="ml-2 text-xs text-blue-400" />
          </Link>
        </header>
        <figure
          className={cn(
            isLeft ? "lg:col-start-1" : "lg:col-start-2",
            "mt-10 -mx-4 relative lg:mt-0 z-0",
            "lg:rounded-lg lg:shadow-md p-4 justify-self-center lg:bg-white lg:overflow-hidden "
          )}
          style={{ maxWidth: "30em" }}
        >
          <img src={image} alt="" className="shadow-xl rounded-lg lg:shadow-none lg:rounded-none" />
          <figcaption className="pt-4 text-sm italic text-gray-700 text-center">
            {caption}
          </figcaption>
        </figure>
      </article>
    </section>
  );
};
