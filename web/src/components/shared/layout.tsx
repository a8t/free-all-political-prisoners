import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import "../../styles/layout.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (this.state.scrolled && window.scrollY <= 10) {
      this.setState({ scrolled: false });
    } else if (!this.state.scrolled && window.scrollY > 10) {
      this.setState({ scrolled: true });
    }
  };

  render() {
    const { children, showNav, siteTitle, navMenuItems, textWhite = true } = this.props;
    const { scrolled } = this.state;
    return (
      <>
        <Helmet>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Helmet>
        <Header
          navMenuItems={navMenuItems}
          siteTitle={siteTitle}
          showNav={showNav}
          scrolled={scrolled}
          textWhite={textWhite}
        />
        <>{children}</>
        <Footer siteTitle={siteTitle} />
      </>
    );
  }
}

export default Layout;
