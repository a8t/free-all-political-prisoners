import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";
import UnderConstruction from "./construction";

export default function Layout({ children, isHomepage = false }) {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Helmet>
      <Header isHomepage={isHomepage} />
      {isHomepage ? (
        <main>{children}</main>
      ) : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      )}
      <UnderConstruction />
      <Footer />
    </>
  );
}
