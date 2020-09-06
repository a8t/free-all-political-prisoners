import React from "react";

const PrisonerRow = (props) => {
    return (
        <div className="p-6">
            <div className="flex mb-4 h-70">
                <div className="w-1/4 h-full justify-center p-4">
                    <img src="http://placekitten.com/g/200/200" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                </div>
                <div className="w-3/5 h-full pt-16 px-4">
                    <h2 className="text-3xl text-gray-800 font-bold leading-none mb-2">{props.node.data.Full_name}</h2>
                    <h3 className="text-xl text-gray-500 font-bold mb-1">Date Arrested: {props.node.data.Date_of_Arrest}</h3>
                    <h3 className="text-xl text-gray-500 font-bold mb-1">Sector: {props.node.data.DetPosition}</h3>
                </div>
            </div>
            <div className="px-4">
            <h3 className="text-l text-gray-500 font-bold mb-1">Charged with {props.node.data.Charges}</h3>
            <p>{props.node.data.Details}</p>
            </div>
        </div>
    );
};

const PrisonerRows = (props) => {
    const contentRows = (props.rows || [])
      .filter((r) => !r.disabled)
      .map((r, i) => {
        console.log(r);
        return <PrisonerRow key={r.Full_name} {...r} />;
      });
  
    return (
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto">
          {contentRows}
        </div>
      </section>
    );
  };

  export default PrisonerRows;