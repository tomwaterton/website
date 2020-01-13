import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import linkedin from "../images/footer/linkedin.svg";
import twitter from "../images/footer/twitter.svg";
import email from "../images/footer/email.png";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-footer-700">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">

        <div className="footer-copyright">
            &copy; Tom Waterton, 2020
        </div>

        <div className="footer-info">
            <a href="/about">About this site</a>
        </div>

        <div className="social-media">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/tomwaterton/" target="_blank">
                <img alt="LinkedIn" src={linkedin} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tomwaterton" target="_blank">
                <img alt="Twitter" src={twitter} />
              </a>
            </li>
            <li>
              <a href="mailto:tomwaterton@gmail.com" target="_blank">
                <img alt="Email" src={email} />
              </a>
            </li>
          </ul>
        </div>

        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
