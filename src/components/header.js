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
        <Link to="/">tomwaterton.com</Link>
      </div>

      <div className="navbar">
        <Link to="/content-design">Content design</Link>
        <Link to="/articles">Articles</Link>
        <div className="dropdown">
          <button className="dropbtn">More
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
