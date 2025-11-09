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
    <header className="headerWrapper do-not-print">
      <div className="headerContainer">
        <div className="siteLogoAndName">
          <div className="homeIcon">
            <Link to="/">
              <img alt="Typewriter icon" src={TypewriterIllustration} />
            </Link>
          </div>
          <div className="siteName">
            <Link to="/">tomwaterton.com</Link>
          </div>
        </div>

        <div className="verticalDivider">|</div>

        <div className="navbar">
          <div className="dropdown">
            <button className="dropbtn">
              Content design
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/experience">Experience and skills</Link>
              <Link to="/portfolio">Portfolio of work</Link>
              <Link to="/recommended-books">Recommended books</Link>
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
            <button className="dropbtn">
              More...
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/brewing">Brewing</Link>
              <Link to="/cryptic-crosswords">Crosswords</Link>
              <Link to="/family">Family</Link>
              <Link to="/inventing">Inventing</Link>
              <Link to="/dog">Our dog</Link>
              <Link to="/reading">Reading fiction</Link>
            </div>
          </div>
        </div>

        <div className="header-spacer">&nbsp;</div>
      </div>
    </header>
  );
}

export default Header;
