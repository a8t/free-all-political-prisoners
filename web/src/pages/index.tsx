import React from "react";
import { graphql } from "gatsby";
import Errors from "../components/shared/errors";
import Page from "../templates/page";
import Header from "../components/shared/header";
import Hero from "../components/homepage/hero";
import Layout from "../components/shared/layout";
import NewsletterSignup from "../components/homepage/newsletter";
import {
  FaPersonBooth,
  FaUser,
  FaClock,
  FaQuestion,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaExclamationCircle,
  FaBook,
  FaHeart,
  FaComment,
  FaCommentDots,
  FaUsers,
  FaCalendar,
} from "react-icons/fa";
import ItemsSection from "../components/homepage/itemsSection";
import { casambre, freekarina, ichrpCanadaLogo, cpshr, ucc } from "../images";
import { ImageSection } from "../components/homepage/imageSection";
import SEO from "../components/seo";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    alt
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
      metadata {
        lqip
        dimensions {
          aspectRatio
          width
          height
        }
      }
    }
  }

  query FrontpageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)frontpage/" }) {
      ...PageInfo
    }

    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      primaryColor {
        hex
      }
      secondaryColor {
        hex
      }
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return <Errors errors={errors} />;
  }

  return (
    <Layout isHomepage>
      <SEO title="Set Them Free | ICHRP Canada" />
      <Hero />
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-2 gap-8 md:grid-cols-3 justify-center"
            style={{ placeItems: "center" }}
          >
            <img className="h-12" src={ichrpCanadaLogo} alt="ICHRP Canada" />
            <img
              className="h-12"
              src={cpshr}
              alt="Canada-Philippines Solidarity for Human Rights"
            />
            <img className="h-12" src={ucc} alt="Canada-Philippines Solidarity for Human Rights" />
          </div>
        </div>
      </div>

      {/* here */}
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="relative">
            <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Join the movement today.
            </h3>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
              Together, we can help free political prisoners and prevent more from being detained.
              Learn more about how you can contribute.
            </p>
          </div>

          {[
            {
              title: "Act now",
              subtitle: "With your help, we can free all political prisoners in the Philippines.",
              iconColor: "bg-yellow-500",
              items: [
                {
                  icon: <FaCommentDots className="w-5 h-5" />,
                  title: "Speak up",
                  body: "Use your voice! Join our letter-writing and lobbying campaigns.",
                },
                {
                  icon: <FaHeart className="w-5 h-5" />,
                  title: "Adopt a prisoner",
                  body:
                    "Provide regular support for the immediate and long-term needs of a political prisoner. Make a lsting impact.",
                },
                {
                  icon: <FaCalendar className="w-5 h-5" />,
                  title: (
                    <span>
                      View our calendar of activities
                      <span className="text-gray-500"> (coming soon)</span>
                    </span>
                  ),
                  body: "Get involved with global days of action.",
                },
              ],
              image: freekarina,
              caption:
                "Karina, an accounting student and youth agrarian reform advocate, has been imprisoned since before her 19th birthday.",
              sectionLink: "/act",
              sectionLinkText: "See more forms of action",
            },
            {
              title: "Learn more",
              subtitle:
                "Find out why so many people are imprisoned for their political beliefs in the Philippines. Meet the prisoners and explore their conditions.",
              iconColor: "bg-teal-500",
              items: [
                {
                  icon: <FaQuestionCircle className="w-5 h-5" />,
                  title: "Who are political prisoners?",
                  body:
                    "Where do these prisoners come from, and what work were they doing that got them imprisoned?",
                },
                {
                  icon: <FaExclamationTriangle className="w-5 h-5" />,
                  title: "Urgent release",
                  body:
                    "Given immense over-crowding during the COVID-19 pandemic, we are calling for the urgent release of 40 elderly, ill, pregnant, and nursing prisoners.",
                },
                {
                  icon: <FaUsers className="w-6 h-6" />,
                  title: "All prisoners",
                  body:
                    "Given immense over-crowding during the COVID-19 pandemic, we are calling for the urgent release of 40 elderly, ill, pregnant, and nursing prisoners.",
                },
              ],
              image: casambre,
              caption:
                "Imprisoned peace consultant Rey Casambre (right) has hypertension and type 2 diabetes.",
              sectionLink: "/learn",
              sectionLinkText: "See all resources",
            },
          ].map(
            (
              { title, subtitle, iconColor, items, image, caption, sectionLink, sectionLinkText },
              index
            ) => (
              <ImageSection
                index={index}
                title={title}
                subtitle={subtitle}
                iconColor={iconColor}
                items={items}
                image={image}
                caption={caption}
                sectionLink={sectionLink}
                sectionLinkText={sectionLinkText}
              />
            )
          )}
        </div>
      </div>

      {/* <ItemsSection
        label="Learn"
        title="Who are political prisoners?"
        subtitle="Learn more about who is being imprisoned and why."
        items={[
          {
            icon: <FaExclamationCircle className="w-5 h-5" />,
            title: "Urgent release",
            body: `Forty prisoners are marked for urgent release. These include elderly, ill, and nursing and pregnant prisoners.`,
            link: "/learn/urgen",
          },
          {
            icon: <FaUser className="w-5 h-5" />,
            title: "Profiles",
            body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.`,
            link: "/learn/prisoners",
          },
          {
            icon: <FaBook className="w-5 h-5" />,
            title: "GUOA",
            body: `The call includes GUOA, or General, Unconditional, Omnibus Amnesty for all prisoners`,
            link: "/learn/guoa",
          },
          {
            icon: <FaBook className="w-5 h-5" />,
            title: "GUOA",
            body: `Philippine prisons are the most crowded in the world, at over 500% capacity. Prisoners sleep lying on top of each other.`,
            link: "/learn/conditions",
          },
        ]}
      /> */}

      <NewsletterSignup />
    </Layout>
  );
};

export default IndexPage;
