import { Link } from "gatsby";
import React, { useState } from "react";
import TypewriterIllustration from "../images/favicon/typewriter.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="headerWrapper do-not-print">
      <div className="headerContainer">
        <div className="siteLogoAndName">
          <div className="homeIcon">
            <Link to="/" onClick={closeMenu}>
              <img alt="Typewriter icon" src={TypewriterIllustration} />
            </Link>
          </div>
          <div className="siteName">
            <Link to="/" onClick={closeMenu}>tomwaterton.com</Link>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="navbar desktop-only">
          <div className="dropdown">
            <button className="dropbtn">
              About
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/about">About me</Link>
              <Link to="/articles">Articles</Link>
              <Link to="/speaking">Speaking</Link>
              <Link to="/testimonials">Testimonials</Link>
            </div>
          </div>
        </div>

        <div className="navbar desktop-only">
          <div className="dropdown">
            <button className="dropbtn">
              Work
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/experience">Experience and skills</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/inventing">Inventing</Link>
              <Link to="/recommended-books">Recommended books</Link>
            </div>
          </div>
        </div>

        <div className="navbar desktop-only">
          <div className="dropdown">
            <button className="dropbtn">
              Fun
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/brewing">Brewing</Link>
              <Link to="/cryptic-crosswords">Cryptic crosswords</Link>
              <Link to="/family">Family</Link>
              <Link to="/dog">Our dog</Link>
              <Link to="/reading">Reading fiction</Link>
            </div>
          </div>
        </div>

        <div className="header-spacer desktop-only">&nbsp;</div>

        {/* Mobile hamburger button */}
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-menu-btn mobile-only"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <nav aria-label="Site navigation" className="mobile-nav mobile-only">
          <p className="mobile-nav__heading">About</p>
          <Link className="mobile-nav__link" to="/about" onClick={closeMenu}>About me</Link>
          <Link className="mobile-nav__link" to="/articles" onClick={closeMenu}>Articles</Link>
          <Link className="mobile-nav__link" to="/speaking" onClick={closeMenu}>Speaking</Link>
          <Link className="mobile-nav__link" to="/testimonials" onClick={closeMenu}>Testimonials</Link>

          <p className="mobile-nav__heading">Work</p>
          <Link className="mobile-nav__link" to="/experience" onClick={closeMenu}>Experience and skills</Link>
          <Link className="mobile-nav__link" to="/portfolio" onClick={closeMenu}>Portfolio</Link>
          <Link className="mobile-nav__link" to="/inventing" onClick={closeMenu}>Inventing</Link>
          <Link className="mobile-nav__link" to="/recommended-books" onClick={closeMenu}>Recommended books</Link>

          <p className="mobile-nav__heading">Fun</p>
          <Link className="mobile-nav__link" to="/brewing" onClick={closeMenu}>Brewing</Link>
          <Link className="mobile-nav__link" to="/cryptic-crosswords" onClick={closeMenu}>Cryptic crosswords</Link>
          <Link className="mobile-nav__link" to="/family" onClick={closeMenu}>Family</Link>
          <Link className="mobile-nav__link" to="/dog" onClick={closeMenu}>Our dog</Link>
          <Link className="mobile-nav__link" to="/reading" onClick={closeMenu}>Reading fiction</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
