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
    <header className="headerWrapper">
      <div className="headerContainer">

        <div className="homeIcon">
          <Link to="/">
            <img
              alt="Typewriter icon"
              className=""
              src={TypewriterIllustration}
            />
          </Link>
        </div>

        <div className="siteName">
          <Link to="/">tomwaterton.com</Link>
        </div>
        <div className="verticalDivider">
          |
        </div>

        <div className="navbar nav1">
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

        <div className="navbar">
          <Link to="/articles">Articles</Link>
        </div>

        <div className="navbar">
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
