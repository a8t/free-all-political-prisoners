import React from "react";
import InfoRows from "../components/page-builder/InfoRows";
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

  console.log (prisonerData);

  return (

    <Layout>
      <SEO title="Learn | Set Them Free | ICHRP Canada" />

      <main className="prose">
        <h1>Learn</h1>

        <p>This page is under construction. Please check back soon!</p>

        <InfoRows
          title="Hello"
          rows={ prisonerData }
        />

      </main>
    </Layout>
  );
}

export default LearnPage;
