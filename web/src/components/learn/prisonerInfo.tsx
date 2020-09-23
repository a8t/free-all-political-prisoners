import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FaUser } from "react-icons/fa";

const PrisonerRow = (props) => {
  const {
    Full_name,
    Date_of_Arrest,
    DetPosition,
    Charges,
    Organizational_Affiliation,
  } = props.node.data;
  return (
    <li>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <div className="flex w-16 h-16 bg-cool-gray-200 rounded-full items-center justify-center">
          <FaUser className="text-cool-gray-400 w-6 h-6" />
        </div>
        <div className="font-medium text-lg leading-6 space-y-1">
          <h4 className="font-bold">{Full_name}</h4>
          <p className="text-indigo-600 ">{Organizational_Affiliation}</p>
        </div>
      </div>
    </li>
  );
};

const PrisonerRows = ({ rows = [] }) => {
  const { nursingMother } = useStaticQuery(graphql`
    query NurstingMother {
      nursingMother: airtablePrisonerSectors(data: { Sector: { eq: "Nursing Mother" } }) {
        recordId
      }
    }
  `);

  const elderlyCount = rows.filter(({ node }) => node.data.AgeBracket === "Elderly").length;
  const nursingCount = rows.filter(({ node }) =>
    node.data._xxPrisonerxSector?.includes(nursingMother.recordId)
  ).length;
  const longTimeCount = rows.filter(({ node }) => node.data["Years_Detained"] > 5).length;

  const stats = [
    { stat: rows.length, label: "Priority release prisoners" },
    { stat: longTimeCount, label: "Imprisoned over 5 years" },
    { stat: elderlyCount, label: "Elderly prisoners" },
    { stat: nursingCount, label: "Nursing mothers" },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto py-12 max-w-screen-xl">
        <div className="space-y-5 sm:space-y-4">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
            All urgent release prisoners
          </h2>
          <p className="text-xl leading-7 text-gray-500">
            Out of over 600 political prisoners, our partners have marked some as urgent release
          </p>

          <div className="mt-5 grid gap-5 grid-cols-2 lg:grid-cols-4 ">
            {stats.map(({ stat, label }) => (
              <article className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                      {label}
                    </dt>
                    <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">{stat}</dd>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>

        <ul className="lg:col-span-2 mt-12 space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
          {rows
            .filter((r) => !r.disabled)
            .map((r, i) => {
              return <PrisonerRow key={r.Full_name} {...r} />;
            })}
        </ul>
      </div>
    </section>
  );
};

export default PrisonerRows;
