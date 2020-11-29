import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import TypewriterIllustration from "../images/favicon/typewriter.svg";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="header-700 2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-sm xs:text-sm">
      <div className="flex flex-wrap items-center max-w-5xl mx-auto p-4 pt-8">

        <div className="home-icon xl:w-10 lg:w-10 md:w-8 sm:w-8 xs:w-8 ">
          <Link to="/">
            <img
              alt="Typewriter icon"
              className=""
              src={TypewriterIllustration}
            />
          </Link>
        </div>

        <div className="site-name sm:hidden xs:hidden pl-4">
          <Link to="/">tomwaterton.com</Link>
        </div>
        <div className="vertical-divider xl:pl-8 lg:pl-8 md:pl-5 sm:hidden xs:hidden">
          |
        </div>

        <div className="navbar md:mx-1.5 lg:mx-4 xl:mx-6 sm:pl-4 xs:pl-4">
          <div className="dropdown">
            <button className="dropbtn">Content design
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
            <Link to="/experience">Experience and skills</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/speaking">Speaking</Link>
              <Link to="/testimonials">Testimonials</Link>
            </div>
          </div>
        </div>

        <div className="navbar md:mx-1.5 lg:mx-4 xl:mx-6">
          <Link to="/articles">Articles</Link>
        </div>

        <div className="navbar md:mx-1.5 lg:mx-4 xl:mx-6">
          <div className="dropdown">
            <button className="dropbtn">More...
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/patents">Patents</Link>
              <Link to="/cryptic-crosswords">Cryptic crosswords</Link>
              <Link to="/reading">Reading</Link>
              <Link to="/brewing">Brewing</Link>
              <Link to="/family">Family</Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
