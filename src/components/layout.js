import { Link } from 'gatsby';
import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import linkedin from "../images/footer/linkedin.svg";
import twitter from "../images/footer/twitter.svg";
import email from "../images/footer/email.png";

function Layout(props) {
  return (
    <div className="flex flex-col font-sans min-h-screen">
      <Header />

      <main>
        {props.children}
      </main>

      <footer className="bg-footer-700">
        <div className="container text-center justify-between max-w-5xl mx-auto p-6">
            <div className="w-full flex xs:flex-wrap sm:flex-wrap items-center justify-center md:justify-between px-6">
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center w-full text-sm">
                <div className="footer-copyright">
                    &copy; Tom Waterton, 2020.
                </div>
                <div className="footer-info hover:textDecoration">
                  <Link to="/about">About this site</Link>
                </div>
              </div>
              <div className="flex items-center md:mt-0">
                <div className="social-media">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/tomwaterton/">
                        <img alt="LinkedIn icon" src={linkedin} />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/tomwaterton">
                        <img alt="Twitter icon" src={twitter} />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:tomwaterton@gmail.com">
                        <img alt="Email icon" src={email} />
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
