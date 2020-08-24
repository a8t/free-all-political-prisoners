import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";
import UnderConstruction from "./construction";

export default function Layout({ children, isHomepage = false }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Helmet>
      <Header isHomepage={isHomepage} />
      {isHomepage ? (
        <main className="flex-1">{children}</main>
      ) : (
        <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      )}
      <UnderConstruction />
      <Footer />
    </div>
  );
}
