import { Link } from 'gatsby';
import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import linkedin from "../images/footer/linkedin.svg";
import twitter from "../images/footer/twitter.svg";
import email from "../images/footer/email.png";

function Layout(props) {
  return (
    <div className="pageWrapper">
      <Header />

      <main>
        {props.children}
      </main>

      <footer className="footer">
        <div className="footerContainer">
            <div className="footerContainer2">
              <div className="footerContainer3">
                <div className="footerCopyright">
                    &copy; Tom Waterton, 2022
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
                        <img alt=" " src={linkedin} />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/tomwaterton">
                        <img alt=" " src={twitter} />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:tomwaterton@gmail.com">
                        <img alt=" " src={email} />
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
  children: PropTypes.node.isRequired
};

export default Layout;
