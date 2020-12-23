import React from "react";
import PrisonerRows from "../components/learn/prisonerInfo";
import Layout from "../components/shared/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql, Link } from "gatsby";

import { FeaturedPrisoners } from "../components/learn/featured";

const LearnPage = () => {
  const { priorityPrisoners, allPrisoners } = useStaticQuery(graphql`
    query prisonerData {
      priorityPrisoners: allAirtablePrisoners(
        filter: { table: { eq: "Prisoners" }, data: { Priority_Release: { eq: true } } }
      ) {
        edges {
          node {
            data {
              AgeBracket
              ArrestPlace
              Charges
              CityDetained
              Date_of_Arrest(difference: "", formatString: "", locale: "", fromNow: false)
              DetCenter
              DetPosition
              Details
              FirstName
              Full_name
              Gender
              MiddleName
              LastName
              Priority_Release
              Organizational_Affiliation
              ProvinceDetained
              RegionDetained
              Years_Detained
              _xxPrisonerxSector
              Years_Detained
            }
          }
        }
      }

      allPrisoners: allAirtablePrisoners {
        nodes {
          data {
            AgeBracket
            ArrestPlace
            Charges
            CityDetained
            Date_of_Arrest(difference: "", formatString: "", locale: "", fromNow: false)
            DetCenter
            DetPosition
            Details
            FirstName
            Full_name
            Gender
            MiddleName
            LastName
            Priority_Release
            Organizational_Affiliation
            ProvinceDetained
            RegionDetained
            Years_Detained
            _xxPrisonerxSector
            Years_Detained
          }
        }
      }
    }
  `);

  const prisonerData = priorityPrisoners.edges;
  const allPrisonerData = allPrisoners.nodes;

  return (
    <Layout rootClassnames="bg-gray-100">
      <SEO title="Learn | Set Them Free | ICHRP Canada" />

      {/* <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            Urgent Release Prisoners
          </h2>
        </div> */}
      <section id="featured-prisoners">
        <FeaturedPrisoners />
      </section>
      <section id="urgent-release" className="my-48">
        <PrisonerRows rows={prisonerData} />
      </section>

      <section id="all-prisoners" className="mb-48">
        <header className="mb-5 pb-5 border-b border-gray-200 space-y-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">All prisoners</h3>
          <p className="max-w-4xl text-sm leading-5 text-gray-500">
            A growing archive of current political prisoners in the Philippines
          </p>
        </header>

        <div className="grid grid-cols-3 gap-5">
          {allPrisonerData.map(({ data }) => (
            <div>{data.Full_name}</div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default LearnPage;
