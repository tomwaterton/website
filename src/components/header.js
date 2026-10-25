import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import TypewriterIllustration from "../images/favicon/typewriter.svg";

// Desktop nav dropdown. Opens on hover (mouse), and on click / tap / Enter /
// Space (touch and keyboard). Closes on Escape, on focus leaving the dropdown,
// on a tap elsewhere, and when the mouse leaves.
function Dropdown({ children, label }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  // Listeners are attached natively (not as JSX props) because the container
  // is a non-interactive <div>, and they are only needed while the menu is open.
  useEffect(() => {
    if (!open) return undefined;

    const container = containerRef.current;
    const close = () => setOpen(false);

    const handlePointerDown = (event) => {
      if (!container.contains(event.target)) {
        close();
      }
    };
    const handleFocusOut = (event) => {
      if (!container.contains(event.relatedTarget)) {
        close();
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        close();
        buttonRef.current.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    container.addEventListener("focusout", handleFocusOut);
    container.addEventListener("mouseleave", close);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      container.removeEventListener("focusout", handleFocusOut);
      container.removeEventListener("mouseleave", close);
    };
  }, [open]);

  return (
    <div
      className={`dropdown${open ? " is-open" : ""}`}
      ref={containerRef}
    >
      <button
        aria-expanded={open}
        className="dropbtn"
        onClick={() => setOpen((o) => !o)}
        ref={buttonRef}
        type="button"
      >
        {label}
      </button>
      <div className="dropdown-content">{children}</div>
    </div>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="headerWrapper do-not-print">
      <div className="headerContainer">
        <div className="siteLogoAndName">
          <div className="homeIcon">
            <Link onClick={closeMenu} to="/">
              <img alt="Typewriter icon" src={TypewriterIllustration} />
            </Link>
          </div>
          <div className="siteName">
            <Link onClick={closeMenu} to="/">tomwaterton.com</Link>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="navbar desktop-only">
          <Dropdown label="About">
            <Link to="/about">About me</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/speaking">Speaking</Link>
            <Link to="/testimonials">Testimonials</Link>
          </Dropdown>
        </div>

        <div className="navbar desktop-only">
          <Dropdown label="Work">
            <Link to="/experience">Experience and skills</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/inventing">Inventing</Link>
            <Link to="/recommended-books">Recommended books</Link>
          </Dropdown>
        </div>

        <div className="navbar desktop-only">
          <Dropdown label="Fun">
            <Link to="/brewing">Brewing</Link>
            <Link to="/cryptic-crosswords">Cryptic crosswords</Link>
            <Link to="/family">Family</Link>
            <Link to="/dog">Our dog</Link>
            <Link to="/reading">Reading fiction</Link>
          </Dropdown>
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
          <Link className="mobile-nav__link" onClick={closeMenu} to="/about">About me</Link>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/articles">Articles</Link>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/speaking">Speaking</Link>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/testimonials">Testimonials</Link>

          <p className="mobile-nav__heading">Work</p>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/experience">Experience and skills</Link>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/portfolio">Portfolio</Link>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/inventing">Inventing</Link>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/recommended-books">Recommended books</Link>

          <p className="mobile-nav__heading">Fun</p>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/brewing">Brewing</Link>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/cryptic-crosswords">Cryptic crosswords</Link>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/family">Family</Link>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/dog">Our dog</Link>
          <Link className="mobile-nav__link" onClick={closeMenu} to="/reading">Reading fiction</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
