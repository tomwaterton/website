import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

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
    <header className="header-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">

      <div className="site-name">
        <a href="/">tomwaterton.com</a>
      </div>

      <div className="navbar">
        <a href="content-design">Content design</a>
        <a href="articles">Articles</a>
        <div className="dropdown">
          <button className="dropbtn">More
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="patents">Patents</a>
            <a href="cryptic-crosswords">Cryptic crosswords</a>
            <a href="reading">Reading</a>
            <a href="brewing">Brewing</a>
            <a href="family">Family</a>
          </div>
        </div>
      </div>

      </div>
    </header>
  );
}

export default Header;
