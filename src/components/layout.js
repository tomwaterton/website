import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import linkedin from "../images/footer/linkedin.svg";
import email from "../images/footer/email.png";

function Layout(props) {
  return (
    <div className="pageWrapper">
      <Header />

      <main>{props.children}</main>

      <footer className="footer do-not-print">
        <div className="footerContainer">
          <div className="footerContainer2">
            <div className="footerContainer3">
              <div className="footerCopyright">
                &copy; Tom Waterton, 2020–{new Date().getFullYear()}
              </div>
              <div className="footerInfo">
                <Link to="/about">About this site</Link>
              </div>
            </div>
            <div className="socialMediaContainer">
              <div className="socialMedia">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/tomwaterton/">
                      <img alt="LinkedIn icon" src={linkedin} />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:tomwaterton@gmail.com">
                      <img
                        alt="Email icon"
                        height="32px"
                        src={email}
                        width="32px"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
