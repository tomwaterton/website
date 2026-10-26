import React from "react";
import { Seo } from "../components/seo";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import AboutIllustration from "../images/about-this-site/IDE.png";

const AboutThisSitePage = () => {
  return (
    <Layout>
      <ContentWidth>
        <section className="row padding-bottom">
          <div className="column">
            <h1>About this site</h1>
            <p>
              <em>
                A few years back I set myself the challenge of creating my own
                website from scratch, and this was the result — and I&apos;ve
                enjoyed tinkering with it ever since.
              </em>
            </p>
            <p>
              <em>
                You&apos;ll find some information <a href="/about">about me</a>,
                my <a href="/experience">experience and skills</a>, my{" "}
                <a href="/portfolio">portfolio</a>, as well as some of my{" "}
                <a href="/articles">articles</a>, hobbies, and interests.
              </em>
            </p>
            <p className="padding-bottom-small">
              <em>Enjoy!</em>
            </p>
          </div>
          <div className="column">
            <img
              alt="Screenshot of my IDE"
              className="block tilt-landscape-left"
              src={AboutIllustration}
            />
          </div>
        </section>

        <section className="row">
          <div className="column">
            <h2>Technical details</h2>
            <ul className="ul-dash padding-bottom">
              <li>
                I built this site using the open source{" "}
                <a
                  href="https://www.gatsbyjs.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Gatsby
                </a>{" "}
                React-based web development framework.
              </li>
              <li>
                More recently, I&apos;ve started using AI tools such as{" "}
                <a
                  href="https://bob.ibm.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  IBM Bob
                </a>{" "}
                when further developing the site.
              </li>
              <li>
                I use{" "}
                <a
                  href="https://github.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>{" "}
                as my source repository.
              </li>
              <li>
                I use{" "}
                <a
                  href="https://pages.github.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub Pages
                </a>{" "}
                to host the site.
              </li>
              <li>
                I use{" "}
                <a
                  href="https://www.google.com/analytics"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google Analytics
                </a>{" "}
                to analyse site traffic. (Thanks to both my visitors 😉)
              </li>
            </ul>
            <p>
              If you spot any bugs 🐛 or simply want to say hello, please do{" "}
              <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20website">
                get in touch
              </a>{" "}
              with me.
            </p>
          </div>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export default AboutThisSitePage;

export const Head = () => (
  <Seo
    description="How Tom Waterton built this personal website — using Gatsby and React, hosted on GitHub Pages."
    title="About this site – Tom Waterton"
  />
);
