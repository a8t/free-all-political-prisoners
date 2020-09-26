import React, { useState } from "react";
import InfoRows from "../components/page-builder/InfoRows";
import PrisonerRows from "../components/learn/prisonerInfo";
import Layout from "../components/shared/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql, Link } from "gatsby";
import { cn } from "../lib/helpers";
import { useBoolean, useInterval } from "react-use";
import { FaHandHoldingHeart, FaUser } from "react-icons/fa";
import { casambre, freekarina } from "../images";

interface FeaturedProfile {
  name: string;
  sector: string;
  image: string;
  blurb?: string;
}

const featuredPrisoners: Array<FeaturedProfile> = [
  {
    name: "Vicente Ladlad",
    sector: "Peace consultant",
    blurb: `Vic Ladlad is a consultant to the peace process in the Philippines. He was arrested in a joint Philippine National Police/Armed Forces of the Philippines raid in November 2018 on the usual trumped-up charge of illegal possession of firearms/explosives. Ladlad is 71 years old, with chronic asthma, and is at severe risk of COVID-19 in the Philippines’ overcrowded jails. His arrest is a violation of the internationally-recognized Joint Agreement on Safety and Guarantees (JASIG), an agreement between the government and the National Democratic Front that governs safe conduct for persons involved in the peace process. He is currently being held in the Marcos-era jail, Camp Bagong Diwa.`,
    image: null,
  },
  {
    name: "Karina Dela Cerna",
    sector: "Peasant advocate",
    blurb: `Karina Dela Cerna is a youth activist, serving as the current Deputy Secretary General the National Network of Agrarian Reform Advocates. At 19, she is among the youngest Philippine political prisoners. She was arrested with 22 other youths while practicing a cultural performance on October 31, 2019. The arrest was made during a police and military raid of an office. After 6 days, 21 of the youths were released. Karina and one other youth were charged with trumped-up charges. She is presently detained at the Negros Occidental District Jail in Bago City.`,
    image: freekarina,
  },
  {
    name: "Reina Mae Nasino",
    sector: "Urban poor advocate",
    blurb: `Reina Mae Nasino is the coordinator of KADAMAY-Manila, an organization of the urban poor. She is one of several activists arrested together in the tiny BAYAN offices in Manila, in November 2019, on the usual charges of illegal possession of firearms/explosives. On July 01, 2020, she gave birth to her first child. She is 23 years old, and has been separated from her new daughter. She is being held in Manila City Jail.`,
    image: null,
  },
  {
    name: "Maoj Maga",
    sector: "Trade unionist",
    blurb: `“Maoj” Maga is an organizer with the labour union Kilusang Mayo Uno. He was arrested in February 2018, in Manila, while playing basketball. The Philippine National Police planted a .45 pistol in his bag when they arrested him. He is being held in the Marcos-era jail at Camp Bagong Diwa.`,
    image: null,
  },
  {
    name: "Bob Reyes",
    sector: "Public sector unionist",
    blurb: `Bob Reyes is a former organizer for the public sector union COURAGE. He was arrested in June 2018 on charges of arson, in regions he had never visited, and the typical charge of illegal possession of firearms/explosives, commonly used because it is easy to plant weapons, and the offense is not bailable. He is currently being held in Quezon City Jail.`,
    image: null,
  },
  {
    name: "Rey Casambre",
    sector: "Peace advocate",
    blurb: `Rey Casambre is a dedicated advocate and long-time Executive Director of the Philippine Peace Centre. He is elderly, with hypertension and type 2 diabetes. As a peace consultant of the NDFP, his arrest and imprisonment are in violation of the internationally-recognized JASIG agreement between the government and the NDF that guarantees safe conduct for persons involved in the peace process.`,
    image: casambre,
  },
];

const Comp = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [isRunning, toggleIsRunning] = useBoolean(true);

  // useInterval(
  //   () => {
  //     setSelectedIndex((selectedIndex + 1) % featuredPrisoners.length);
  //   },
  //   isRunning ? 3000 : null
  // );

  const selectedPrisoner = featuredPrisoners[selectedIndex];

  return (
    <section className="max-w-screen-xl lg:py-16 shadow-xl mb-24 mt-12 bg-white p-12">
      <header className="mb-16">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
          Featured Prisoners
        </h2>

        <p className="mt-4">
          Over time, we will feature specific prisoners for our Adopt-A-Prisoner campaign to
          highlight their story and their struggle.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-12 lg:grid-rows-1">
        <div className=" mx-auto w-full grid grid-cols-3 gap-8 lg:flex flex-col lg:gap-0">
          <div>
            {selectedPrisoner.image ? (
              <img
                src={selectedPrisoner.image}
                alt="..."
                className="shadow rounded-full w-48 h-auto align-middle border-none mx-auto"
              />
            ) : (
              <div className="w-48  h-48 mx-auto flex bg-cool-gray-200 rounded-full items-center justify-center">
                <FaUser className="text-cool-gray-400 w-12 h-12" />
              </div>
            )}
            <div className={cn("mt-4 flex flex-col items-center w-auto")}>
              <span className="font-bold text-xl ">{selectedPrisoner.name}</span>
              <span className="text-indigo-600 ">{selectedPrisoner.sector}</span>
            </div>
          </div>
          <p className="inline-block col-span-2 m-auto lg:mt-8">
            {selectedPrisoner.blurb ??
              "Esse dolor commodo cillum sit exercitation culpa culpa nulla dolor. Ullamco dolor laborum eu proident ea. Sit exercitation commodo qui nisi. Veniam nostrud incididunt et qui voluptate non consequat pariatur tempor nulla cillum non nisi commodo. Id nostrud nostrud veniam fugiat."}
          </p>
        </div>

        <div className="lg:col-span-2 space-y-12">
          <ul className="sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:gap-x-2">
            {featuredPrisoners.map(({ name, sector, image }, index) => (
              <li
                className={cn(index === selectedIndex ? "bg-indigo-100 shadow-md" : "", "p-6 ")}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className="flex items-center space-x-4 lg:space-x-6">
                  {image ? (
                    <img
                      className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src={image}
                      alt={name}
                    />
                  ) : (
                    <div className="flex w-16 h-16 bg-cool-gray-200 rounded-full items-center justify-center">
                      <FaUser className="text-cool-gray-400 w-6 h-6" />
                    </div>
                  )}
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h4>{name}</h4>
                    <p className="text-indigo-600">{sector}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-md bg-green-100 p-4 flex">
            <div className="flex-shrink-0">
              {/* Heroicon name: check-circle */}
              <FaHandHoldingHeart className="text-green-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm leading-5 font-medium text-green-800">You can help out.</h3>
              <p className="mt-2 text-sm leading-5 text-green-700">
                ICHRP Canada is linking with progressive organizations, institutions, and
                individuals to help find justice for these political prisoners.
              </p>
              <div className="mt-4 -mx-2 -my-1.5 flex">
                <Link
                  to="/act"
                  className="px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-200 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150"
                >
                  Adopt a prisoner
                </Link>
                <Link
                  to="/act"
                  className="ml-3 px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-200 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150"
                >
                  Write a letter
                </Link>
                <Link
                  to="/act"
                  className="ml-3 px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-200 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150"
                >
                  More forms of action
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
      <Comp />

      <PrisonerRows rows={prisonerData} />

      <section>
        <header className="mb-5 pb-5 border-b border-gray-200 space-y-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">All prisoners</h3>
          <p className="max-w-4xl text-sm leading-5 text-gray-500">
            A growing archive of all current political prisoners in the Philippines
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
