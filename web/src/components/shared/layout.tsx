import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="max-w-3xl mx-auto">{children}</div>
        </div>
      )}
      <Footer />
    </>
  );
}
