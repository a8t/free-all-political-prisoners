import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";
import UnderConstruction from "./construction";
import { cn } from "../../lib/helpers";

export default function Layout({
  children,
  rootClassnames = "",
  isHomepage = false,
  isContentFullWidth = false,
}) {
  return (
    <div className={cn("min-h-screen flex flex-col", rootClassnames)}>
      <Helmet>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Helmet>
      <Header shouldHeaderStartTransparent={isHomepage} />
      {isHomepage ? (
        <main className="flex-1">{children}</main>
      ) : (
        <div
          className={cn(
            "flex-1 ",
            isContentFullWidth ? "" : "container mx-auto px-4 sm:px-6 lg:px-8"
          )}
        >
          {children}
        </div>
      )}
      <UnderConstruction />
      <Footer />
    </div>
  );
}
