import { Field, Form, Formik } from "formik";
import { graphql, Link, useStaticQuery, navigate } from "gatsby";
import React, { ReactElement, useState } from "react";
import SEO from "../../components/seo";
import Layout from "../../components/shared/layout";
import Transition from "../../components/utility/Transition";
import { cn } from "../../lib/helpers";

const FormStep: React.FC<{
  title: React.ReactNode;
  actionButton: React.ReactNode;
  id?: string;
}> = ({ id, title, actionButton, children }) => {
  return (
    <article className="md:grid md:grid-cols-3 md:gap-6 mt-20" id={id}>
      {title}
      <div className={cn("mt-5 md:mt-0 md:col-span-2", "shadow sm:rounded-md sm:overflow-hidden")}>
        <div className="px-4 py-5 bg-white sm:p-6 space-y-6">{children}</div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">{actionButton}</div>
      </div>
    </article>
  );
};

const FormDivider = () => {
  return (
    <div className="hidden sm:block">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>
  );
};

const transitionProps = {
  enter: "transition ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "transition ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function AdoptFormPage() {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);

  const { priorityPrisoners, allPrisoners } = useStaticQuery(graphql`
    query FormPrisoners {
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
    }
  `);

  const prisoners = [
    ...(priorityPrisoners.edges.map(({ node }) => node.data.Full_name) as Array<string>),
    "Other",
  ];
  return (
    <Layout rootClassnames="bg-gray-50 overflow-hidden">
      <SEO title="Adopt a Political Prisoner | ICHRP Canada" />

      <header className="pb-5 border-b border-gray-200 mt-12">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Adopt A Prisoner registration
        </h3>

        <p className="max-w-4xl text-sm leading-5 text-gray-500 mt-4">
          This form is for individuals or organizations to register to adopt a specific political
          prisoner in the Philippines, as part of our campaign for the release of all political
          prisoners.
        </p>

        <p className="max-w-4xl text-sm leading-5 text-gray-500 mt-4">
          Adopting a prisoner means participating in campaigning, letter-writing, and fundraising in
          order to raise political, moral, and material support.
        </p>

        <p className="max-w-4xl text-sm leading-5 text-gray-500 mt-4">
          ICHRP Canada will provide you with sample materials and programs for campaigning.
        </p>

        <p className="max-w-4xl text-sm leading-5 text-gray-500 mt-4">
          If you'd like to learn more about the Adopt A Prisoner program,{" "}
          <Link className="text-indigo-600" to="/adopt">
            click here
          </Link>
          .
        </p>
      </header>

      <Formik
        initialValues={{
          prisonerOptions: null,
          prisoner: null,
          otherPrisonerName: null,
          contactName: null,
          contactEmail: null,
          contactCity: null,
          contactProvince: null,
          contactCountry: null,
          registeringAsOrg: [],
          contactOrganizationName: null,
          contactOrganizationEmail: null,
        }}
        onSubmit={async (values) => {
          const res = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "adopt-register", ...values }),
          });

          navigate("/adopt/thanks");
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => {
          const isFirstStepDone =
            values.prisonerOptions === "assign" ||
            (values.prisonerOptions === "specific" &&
              values.prisoner &&
              values.prisoner !== "Other") ||
            (values.prisonerOptions === "specific" &&
              values.prisoner &&
              values.prisoner === "Other" &&
              values.otherPrisonerName);

          const isContactStepDone =
            values.contactName &&
            values.contactEmail &&
            values.contactCity &&
            values.contactProvince &&
            values.contactCountry &&
            (values.registeringAsOrg.length > 0
              ? values.contactOrganizationName && values.contactOrganizationEmail
              : true);
          return (
            <Form name="adopt-register" data-netlify={true} translate>
              <FormStep
                title={
                  <FormStepTitle
                    title="Select a prisoner"
                    subtitle="Choose from a list of priority prisoners, pick your own, or let us pick for you."
                  />
                }
                actionButton={
                  <span
                    className={cn(
                      "inline-flex rounded-md shadow-sm",
                      isFirstStepDone ? null : "opacity-25 cursor-not-allowed pointer-events-none"
                    )}
                  >
                    <button
                      type="button"
                      disabled={!isFirstStepDone}
                      onClick={() => {
                        nextStep();
                        setImmediate(() => {
                          document
                            .querySelector("#personalInfo")
                            .scrollIntoView({ behavior: "smooth" });

                          document.querySelector("#personalInfo input").focus();
                        });
                      }}
                      className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Next
                    </button>
                  </span>
                }
              >
                <fieldset name="prisonerOptions" onChange={handleChange} onBlur={handleBlur}>
                  <legend className="text-base leading-6 font-medium text-gray-900">
                    Select a prisoner
                    <RequiredFieldIndicator />
                  </legend>
                  <div className="mt-4">
                    <div className="mt-4 space-y-4">
                      <label className="flex font-medium text-gray-700 text-sm leading-5">
                        <Field
                          name="prisonerOptions"
                          value="assign"
                          type="radio"
                          className="mt-0.5 form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                        <div className="ml-3 ">
                          I want ICHRP Canada to pick a prisoner for me
                          <p className="text-gray-500 font-normal">
                            ICHRP Canada will match you to a prisoner form our list of priority
                            release prisoners
                          </p>
                        </div>
                      </label>

                      <label className="flex font-medium text-gray-700 text-sm leading-5">
                        <Field
                          name="prisonerOptions"
                          value="specific"
                          type="radio"
                          className="mt-0.5 form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                        <div className="ml-3">
                          I want to select a specific prisoner
                          <p className="text-gray-500 font-normal">
                            Choose a specific prisoner from a list of urgent release prisoners
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <Transition show={values.prisonerOptions === "specific"} {...transitionProps}>
                  <div className="space-y-6">
                    <TextInputGroup>
                      <label className="block text-sm font-medium leading-5 text-gray-700">
                        Prisoner to adopt
                        <RequiredFieldIndicator />
                        <Field
                          name="prisoner"
                          component="select"
                          className="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        >
                          <option disabled selected>
                            --
                          </option>
                          {prisoners.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </Field>
                      </label>
                    </TextInputGroup>
                    <Transition show={values.prisoner === "Other"} {...transitionProps}>
                      <TextInput label="Prisoner name" isRequired name="otherPrisonerName" />
                    </Transition>
                    <Transition show={values.prisoner} {...transitionProps}>
                      <TextAreaField
                        label={
                          <span>
                            Why I'd like to adopt this prisoner <OptionalFieldIndicator />
                          </span>
                        }
                        defaultValue={""}
                        description={""}
                      />
                    </Transition>
                  </div>
                </Transition>
              </FormStep>

              <Transition show={step >= 2} {...transitionProps}>
                <div>
                  <FormDivider />
                  <FormStep
                    id="personalInfo"
                    title={
                      <FormStepTitle
                        title="Your contact information"
                        subtitle="Please fill this out so that we can get back to you as soon as possible."
                      />
                    }
                    actionButton={
                      <span
                        className={cn(
                          "inline-flex rounded-md shadow-sm",
                          isContactStepDone
                            ? null
                            : "opacity-25 cursor-not-allowed pointer-events-none"
                        )}
                      >
                        <button
                          disabled={!isContactStepDone}
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                          Submit
                        </button>
                      </span>
                    }
                  >
                    <TextInputGroup>
                      <TextInput label="Name" name="contactName" isRequired autofocus />
                      <TextInput label="Email address" name="contactEmail" isRequired />
                    </TextInputGroup>

                    <TextInputGroup>
                      <TextInput label="City" name="contactCity" isRequired />
                      <TextInput label="State / Province" name="contactProvince" isRequired />
                      <TextInput label="Country" name="contactCountry" isRequired />
                    </TextInputGroup>

                    <div className="bg-teal-50 -mx-6 px-6 py-4 mt-4">
                      <label className="flex font-medium items-center text-gray-700 text-sm leading-5 ">
                        <Field
                          name="registeringAsOrg"
                          value="assign"
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                        <div className="ml-3 ">I am registering on behalf of an organization</div>
                      </label>

                      <Transition show={values.registeringAsOrg?.length > 0} {...transitionProps}>
                        <div>
                          <TextInputGroup>
                            <TextInput
                              label="Organization name"
                              name="contactOrganizationName"
                              isRequired
                            />
                            <TextInput
                              label="Organization email address"
                              name="contactOrganizationEmail"
                              isRequired
                            />
                          </TextInputGroup>
                        </div>
                      </Transition>
                    </div>
                  </FormStep>
                </div>
              </Transition>
              {/* IGNORE THIS. it's for netlify */}
              <input name="prisonerOptions" hidden />
              <input name="prisoner" hidden />
              <input name="otherPrisonerName" hidden />
              <input name="contactName" hidden />
              <input name="contactEmail" hidden />
              <input name="contactCity" hidden />
              <input name="contactProvince" hidden />
              <input name="contactCountry" hidden />
              <input name="registeringAsOrg" hidden />
              <input name="contactOrganizationName" hidden />
              <input name="contactOrganizationEmail" hidden />
            </Form>
          );
        }}
      </Formik>
    </Layout>
  );
}

function FormStepTitle({ title, subtitle }) {
  return (
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
        <p className="mt-1 text-sm leading-5 text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}

function TextAreaField({ label, defaultValue, description }) {
  return (
    <div className="mt-6">
      <label htmlFor="about" className="block text-sm leading-5 font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id="about"
        rows={3}
        className="rounded-md shadow-sm form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        placeholder="you@example.com"
        defaultValue={defaultValue}
      />
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}

function UrlField({ label, placeholder }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3 sm:col-span-2">
        <label
          htmlFor="company_website"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          {label}
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            http://
          </span>
          <input
            id="company_website"
            className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
}

function PhotoUploadField({ label = "Photo", buttonLabel = "Change" }) {
  return (
    <div className="mt-6">
      <label className="block text-sm leading-5 font-medium text-gray-700">{label}</label>
      <div className="mt-2 flex items-center">
        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
        <span className="ml-5 rounded-md shadow-sm">
          <button
            type="button"
            className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
          >
            {buttonLabel}
          </button>
        </span>
      </div>
    </div>
  );
}

function FileUploadField({}) {
  return (
    <div className="mt-6">
      <label className="block text-sm leading-5 font-medium text-gray-700">Cover photo</label>
      <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="mt-1 text-sm text-gray-600">
            <button className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
              Upload a file
            </button>
            or drag and drop
          </p>
          <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
}

function TextInput({ label, placeholder = "", name, isRequired = false, autofocus = false }) {
  return (
    <label htmlFor={name} className="block text-sm font-medium leading-5 text-gray-700">
      {label}
      {isRequired && <RequiredFieldIndicator />}
      <Field
        name={name}
        placeholder={placeholder}
        autofocus={autofocus}
        className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      />
    </label>
  );
}

function SelectInput({
  label = "Country / Region",
  optionStrings,
  ...props
}: {
  label: string;
  optionStrings: Array<string>;
} & HTMLSelectElement) {
  return (
    <label className="block text-sm font-medium leading-5 text-gray-700">
      {label}
      <select
        {...props}
        className="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      >
        {optionStrings.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function TextInputGroup({ children }) {
  if (!children) {
    return null;
  }

  if (children.length === 3) {
    return (
      <div className="grid grid-cols-6 gap-6 mt-6">
        <div className="col-span-6 sm:col-span-2">{children[0]}</div>
        <div className="col-span-6 sm:col-span-2">{children[1]}</div>
        <div className="col-span-6 sm:col-span-2">{children[2]}</div>
      </div>
    );
  }

  if (children.length === 2) {
    return (
      <div className="grid grid-cols-6 gap-6 mt-6">
        <div className="col-span-6 sm:col-span-3">{children[0]} </div>
        <div className="col-span-6 sm:col-span-3">{children[1]} </div>
      </div>
    );
  }

  if (children.length === 1) {
    <div className="mt-6">{children}</div>;
  }

  return <div className="mt-6">{children}</div>;
}

function RequiredFieldIndicator({}) {
  return <span className="text-teal-400 text-">*</span>;
}

function OptionalFieldIndicator({}) {
  return <span className="text-gray-400 font-normal">(Optional)</span>;
}
