import React from "react";
import InfoRows from "../components/page-builder/InfoRows";
import PrisonerRows from "../components/learn/prisonerInfo"
import Layout from "../components/shared/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";


const LearnPage = () => {

  const prisoners = useStaticQuery(graphql`
  query prisonerData {
    allAirtable(filter: {data: {Priority_Release: {eq: true}}}) {
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
          }
        }
      }
    }
  }
  
  `);

  const prisonerData = prisoners.allAirtable.edges;

  console.log(prisonerData);

  return (

    <Layout>
      <SEO title="Learn | Set Them Free | ICHRP Canada" />

      <main className="mainDiv">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Urgent Release Prisoners
        </h1>
        
        <PrisonerRows
          rows={prisonerData}
        />



      </main>
    </Layout>
  );
}

export default LearnPage;
